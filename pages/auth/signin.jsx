import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signInFunc({ providers }) {
  console.log('providers', providers)
  return (
    <>
      <Header />
      <div className="mt-28  ">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center justify-center" key={provider.name}>
            <img
              className="w-52 object-cover"
              src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png"
              alt="Logo Google"
            />
            <p className="text-sm italic my-10 text-center">This website is created for learning purposes</p>
            <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
