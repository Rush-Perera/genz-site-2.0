"use client";
import Link from "next/link";

const SidebarLink = ({ activeTab }) => {
  const tab = activeTab
  return (
    <>

      <li className="block">
        {tab == 0 ? (
          <Link
            href={`/docs`}
            className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
          >
            Introduction
          </Link>
        ) : (
          <Link
            href={`/docs`}
            className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
          >
            Introduction
          </Link>
        )}
        {tab == 1 ? (
          <Link
            href={`/docs/terms-and-conditions`}
            className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
          >
            Terms and Conditions
          </Link>
        ) : (
          <Link
            href={`/docs/terms-and-conditions`}
            className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
          >
            Terms and Conditions
          </Link>
        )}
        {tab == 2 ? (
          <Link
            href={`/docs/privacy-policy`}
            className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
          >
            Privacy Policy
          </Link>
        ) : (
          <Link
            href={`/docs/privacy-policy`}
            className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
          >
            Privacy Policy
          </Link>
        )}
        {tab == 3 ? (
          <Link
            href={`/docs/refund-policy`}
            className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
          >
            Refund Policy
          </Link>
        ) : (
          <Link
            href={`/docs/refund-policy`}
            className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
          >
            Refund Policy
          </Link>
        )}

        
      </li>
    </>
  );
};

export default SidebarLink;
