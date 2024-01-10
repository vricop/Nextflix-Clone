import classnames from 'classnames'
import { NavArrowRight } from 'iconoir-react'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useState } from 'react'

export function EmailBox() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const t = useTranslations('home')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(event.target.validationMessage)
    setEmail(event.target.value)
  }

  return (
    <form
      method="get"
      className="[grid-template-areas:'input'_'error'_'button'] auto-cols-auto auto-rows-auto md:[grid-template-areas:'input_button'_'error_error'] md:grid-cols-[2fr_1fr] grid gap-x-3 justify-center relative md:w-full md:max-w-lg sm:[--height:3.75rem] md:[--height:4.375rem] md:justify-start md:gap-y-1"
    >
      <input
        className={classnames(
          'rounded-sm md:rounded-tr-none md:rounded-br-none [grid-area:input] px-3 pb-0 h-[3.75rem] md:h-[initial] leading-[theme(spacing.14)] placeholder-transparent text-gray-400 peer',
          { 'border-b-4 border-orange-600': !!email && !!errorMessage },
        )}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={email}
        onChange={handleChange}
        name="email"
        id="email"
        type="email"
        placeholder={t('emailAddressFieldLabel')}
        autoComplete="off"
        maxLength={50}
        minLength={5}
      />
      <label
        className="[grid-area:input] absolute peer-placeholder-shown:top-1/2 left-3 peer-placeholder-shown:-translate-y-1/2 translate-y-0 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out top-1 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal font-bold sm:text-xs text-xs"
        htmlFor="email"
      >
        {t('emailAddressFieldLabel')}
      </label>

      <button className="items-center bg-netflix-alt-light rounded-[2px] border-none text-white gap-x-1 grid [grid-area:button] [grid-auto-columns:min-content_min-content] grid-flow-col justify-center leading-10 px-3 whitespace-nowrap w-auto transition-all duration-200 ease-in-out md:rounded-tl-none md:rounded-bl-none md:leading-[3.75rem] md:text-2xl md:px-8 xl:text-3xl :hover:cursor-pointer :hoverbg-netflix">
        {t('getStartedButton')}
        <NavArrowRight className="xl:text-2xl" />
      </button>
      {errorMessage && (
        <span className="text-orange-50 [grid-area:error] justify-self-start text-left leading-snug md:absolute md:justify-self-[initial]">
          {errorMessage}
        </span>
      )}
    </form>
  )
}
