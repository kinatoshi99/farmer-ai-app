import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

export const MyClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return (

<ClerkProvider>
<ClerkLoading>
          <div className="flex items-center justify-center h-screen text-2xl">
            LOADING...
          </div>
        </ClerkLoading>
        <ClerkLoaded>{children}</ClerkLoaded>
</ClerkProvider>
  );
};