'use client'
import { Logo } from '@components/common/Logo'
import classNames from 'classnames'
import { Check } from 'iconoir-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import {
  ChangeEventHandler,
  ComponentPropsWithRef,
  FormEvent,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'

type InputFieldDefaultProps = Omit<ComponentPropsWithRef<'input'>, 'className'>

type InputFieldProps = InputFieldDefaultProps & {
  label: string
  error?: ReactNode
  className?: {
    wrapper?: string
    input?: string
  }
}

type PasswordFieldProps = InputFieldProps & {
  isVisible?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Checkbox({ label, error, className, ...props }: InputFieldProps) {
  return (
    <div className={classNames(className?.wrapper)}>
      <label className="grid [grid-template:'checkbox_label'_auto_/_auto_1fr] gap-[1ch] items-center text-xs">
        <input
          className={classNames(
            'peer appearance-none w-4 h-4 leading-12 border-none bg-gray-400  [grid-area:checkbox]',
            className?.input,
          )}
          type="checkbox"
          {...props}
        />
        <Check className="[grid-area:checkbox] w-4 h-4 text-black hidden peer-checked:block" />
        <span className="inline-block [grid-area:label]">{label}</span>
      </label>
    </div>
  )
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(
    {
      isVisible = false,
      error,
      className,
      onClick,
      ...props
    }: PasswordFieldProps,
    ref,
  ) {
    return (
      <div
        className={classNames(
          "grid [grid-template:'input'_auto_/_auto]",
          className?.wrapper,
        )}
      >
        <InputField
          className={{
            wrapper: classNames('[grid-area:input]', className?.input),
          }}
          ref={ref}
          type={isVisible ? 'password' : 'text'}
          {...props}
        />
        <button
          className="[grid-area:input] leading-[50px] justify-self-end relative z-index-10 bg-transparent appearance-none border-none text-gray-400 outline-none uppercase text-sm cursor-pointer pl-0 pr-4"
          type="button"
          onClick={onClick}
        >
          {isVisible ? 'Show' : 'Hide'}
        </button>
      </div>
    )
  },
)

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ label, className, error, ...props }, ref) {
    return (
      <div className={className?.wrapper}>
        <label className="grid items-center">
          <input
            className={classNames(
              '[grid-area:1/1] appearance-none rounded-md h-[50px] px-6 pt-5 focus:pb-0 placeholder-shown:pb-5 text-white bg-neutral-700 focus:bg-neutral-600 focus:outline-none border-b-2 border-b-orange-500 placeholder-transparent peer transition-all duration-200 ease-in-out',
              className?.input,
            )}
            ref={ref}
            {...props}
          />
          <span className="[grid-area:1/1] block peer-placeholder-shown:text-base peer-focus:text-xs text-xs font-light text-gray-400 px-6 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3/4 -translate-y-3/4 translate-x-0 pointer-events-none z-10 transition-all duration-200 ease-in-out">
            {label}
          </span>
        </label>
        {error && <span className="text-orange-500 text-xs">{error}</span>}
      </div>
    )
  },
)

export default function Login() {
  const t = useTranslations('login')
  const [isVisible, setIsVisible] = useState(true)
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function togglePasswordVisibility() {
    setIsVisible((previousState) => !previousState)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget

    setFields({
      ...fields,
      [name]: value,
    })
  }

  return (
    <div className="w-full h-screen grid bg-login-overlay bg-black bg-cover bg-no-repeat">
      <Link
        className="absolute top-6 left-9 [grid-area:1/1] text-netflix"
        href="/"
        aria-label="Go home link"
      >
        <Logo />
      </Link>
      <div className="grid gap-y-8 w-full max-w-sm place-self-center bg-black/75 p-[4rem] rounded-md [grid-area:1/1]">
        <h1 className="text-4xl font-bold text-white">Sign in</h1>
        <form className="grid gap-y-5" onSubmit={handleSubmit}>
          <InputField
            onChange={handleChange}
            required
            value={fields.email}
            name="email"
            label="Email or phone number"
            placeholder="Email or phone number"
            type="email"
            error={!fields.email && 'Error'}
          />
          <PasswordField
            onChange={handleChange}
            isVisible={isVisible}
            required
            onClick={togglePasswordVisibility}
            name="password"
            label="Password"
            placeholder="Password"
            value={fields.password}
            error={!fields.password && 'Error'}
          />
          <button
            className="border-none text-white h-[50px] font-bold bg-netflix rounded-md cursor-pointer"
            type="submit"
          >
            {t('signInButton')}
          </button>
          <footer className="grid grid-flow-col items-center justify-between text-neutral-400 text-xs">
            <Checkbox label="Remember me" />
            <p>{t('needHelp')}</p>
          </footer>
        </form>
      </div>
      <footer className="self-end [grid-area:1/1]">footer element</footer>
    </div>
  )
}
