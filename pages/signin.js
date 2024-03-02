import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>SignIn Page</title>
      </Head>

      <div className="relative flex min-h-screen flex-col items-center justify-center bg-blackDark">
        <div className="bg-blueDark w-full max-w-[400px] px-10 py-12 rounded-xl flex flex-col gap-8">
          <h1 className="text-3xl text-center text-white font-medium">
            SignIn in to your account
          </h1>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-grayLight"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              autoComplete="current-email"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-grayLight"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm"
            />
          </div>

          <button
            onClick={() =>
              signIn('credentials', {
                email,
                password,
                redirect: true,
                callbackUrl: '/admin',
              })
            }
            disabled={!email || !password}
            className="bg-blue font-bold py-3 px-4 w-full rounded-lg text-black disabled:bg-blue/50 disabled:text-grayLight"
          >
            Sign In
          </button>
        </div>

        <Link
          href="/"
          className="bg-blue text-black text-clampSecond font-bold px-4 py-3 absolute top-7 right-14 shadow-md shadow-blue/40 rounded"
        >
          Return to Homepage
          <FontAwesomeIcon icon={faRightToBracket} className="ml-3" />
        </Link>
      </div>
    </>
  );
}
