import signInIcon from '../assets/icons/sign-in-icon.svg';
import signUpIcon from '../assets/icons/sign-up-icon.svg';
import gqlIcon from '../assets/icons/graphql-icon.svg';
import { Link } from 'react-router-dom';
import { RouterPage } from '../router';
import { useLocalization } from '../context/localization-context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebaseModule';
import { Loader } from '../components/Loader/Loader';
import React from 'react';

export function WelcomePage() {
  const [user, loading] = useAuthState(auth);
  const { translate } = useLocalization();

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto p-10">
      <nav className="flex gap-10 items-center self-end">
        {loading ? (
          <Loader className="w-7 h-7" />
        ) : !loading && !user ? (
          <div className={'flex flex-col gap-8'}>
            <div className={'flex gap-5'}>
              <Link
                to={RouterPage.SIGN_IN}
                className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
              >
                <img src={signInIcon} alt="local-icon" className="w-8 h-8" />
                {translate.signIn}
              </Link>
              <Link
                to={RouterPage.SIGN_UP}
                className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
              >
                <img src={signUpIcon} alt="local-icon" className="w-8 h-8 " />
                {translate.signUp}
              </Link>
            </div>
            <div>
              <Link
                to={RouterPage.GQL}
                className="flex text-lg items-center gap-3 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
              >
                <img src={gqlIcon} alt="local-icon" className="w-8 h-8 scale-150" />
                {translate.mainPageText}
              </Link>
            </div>
          </div>
        ) : (
          <Link
            to={RouterPage.GQL}
            className="flex text-lg items-center gap-3 hover:brightness-125 hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            <img src={gqlIcon} alt="local-icon" className="w-8 h-8 scale-150" />
            {translate.mainPageText}
          </Link>
        )}
      </nav>
      <section className="pt-12">
        <h2 className="text-3xl font-semibold mb-10">{translate.welcome.head}</h2>
        <p className="text-xl/8">{translate.welcome.desc}</p>
      </section>
      <section className="pt-12">
        <h2 className="text-2xl font-semibold mb-10">Example usage: </h2>
        <div className="text-gray-300 bg-dark-50 pl-9">
          <pre className="text-xl whitespace-pre-wrap">
            <code className="text-gray-300">
              {`
for Editor:

query GetPlanet($ID: ID!) {
  planet(id: $ID) {
    diameter
    name
  }
}


for Variables:

{
  "ID":"cGxhbmV0czox"
}
              `}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
