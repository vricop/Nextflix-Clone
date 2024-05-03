import isValidEmail from '@utils/isValidEmail'
import classnames from 'classnames'
import { useTranslations } from 'next-intl'
import { ChangeEvent, FocusEvent, useState } from 'react'
import CircleXSmall from '@icons/circle-x-small.svg'
import ChevronRight from '@icons/chevron-right-standard.svg'

export function EmailBox() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<boolean>(false)
  const t = useTranslations()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value.trim())
  }

  function handleError(event: FocusEvent<HTMLInputElement>) {
    setError(isValidEmail(event.target.value.trim()))
  }

  return (
    <form
      method="get"
      className="grid gap-x-2 gap-y-4 sm:grid-cols-[2fr_1fr]"
    >
      <div className="grid gap-y-1.5 items-start">
        <label className="grid items-center group text-base" htmlFor="email">
          <input
            className={classnames(
              '[grid-area:1/1] px-4 sm:px-2 pt-5 sm:pt-6 pb-1 leading-[theme(spacing.12)] h-12 sm:leading-[theme(spacing.14)] sm:h-14 rounded border-neutral-500 border focus:outline outline-offset-2 outline-2 outline-white min-w-[theme(spacing.60)] placeholder-transparent text-white bg-neutral-900/70 peer',
              { 'border-red-600': !!email && error },
            )}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={handleChange}
            onBlur={handleError}
            name="email"
            id="email"
            type="email"
            placeholder={t('home.emailAddressFieldLabel')}
            autoComplete="off"
            maxLength={50}
            minLength={5}
          />
          <span className="[grid-area:1/1] ml-3 mr-auto text-neutral-300 transition-all duration-200 ease-in-out mb-6 peer-focus:mb-6 peer-placeholder-shown:mb-0 text-xs peer-placeholder-shown:text-base peer-focus:text-xs">
            {t('home.emailAddressFieldLabel')}
          </span>
        </label>

        {error && (
          <span className="leading-snug gap-x-1 flex justify-start items-center text-xs text-red-500">
            <CircleXSmall />
            {t('common.errors.invalidEmail')}
          </span>
        )}
      </div>

      <button className="items-center self-start mx-auto bg-netflix-alt-light rounded border-none text-white font-medium gap-x-1 flex justify-center py-2 px-4 h-12 sm:h-14 leading-[theme(spacing.12)] sm:leading-[theme(spacing.14)] whitespace-nowrap w-auto transition-all duration-200 ease-in-out text-lg sm:text-2xl sm:w-full md:px-8 :hover:cursor-pointer :hoverbg-netflix">
        {t('home.getStartedButton')}
        <ChevronRight className="xl:text-2xl" />
      </button>
    </form>
  )
}
