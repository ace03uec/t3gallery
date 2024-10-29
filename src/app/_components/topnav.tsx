import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold font-sans">
        <div className="">Gallery</div>
        <div className="">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }