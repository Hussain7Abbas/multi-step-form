import { Input } from '@/components/ui/input';
export function UserInfoStep() {
  return (
    <div className="flex flex-col gap-4 w-[50%]">
      {/* Header */}
      <section className="flex flex-col justify-center text-center">
        <h1 className="text-2xl font-bold">Identity Information</h1>
        <p className="text-sm text-muted-foreground">
          Please enter your information to create an account.
        </p>
      </section>
      {/* Auth Section */}
      <section className="flex flex-col items-center justify-center gap-4">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </section>
    </div>
  );
}
