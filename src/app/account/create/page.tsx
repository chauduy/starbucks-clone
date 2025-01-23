import Link from 'next/link';
import { SiStarbucks } from 'react-icons/si';

function CreateAccount() {
    return (
        <div className="h-full w-full">
            <div className="border-b-2 border-secondary p-4">
                <Link href={'/'}>
                    <SiStarbucks className="h-12 w-12 text-primary md:h-[50px] md:w-[50px]" />
                </Link>
            </div>
            <form className="px-4 py-6">
                <h2 className="mb-8 text-center text-2xl font-extrabold text-black">
                    Sign in or create an account
                </h2>
                <div className="flex items-center text-sm font-medium text-black">
                    <span className="mr-1 text-primary">*</span>indicates required field
                </div>
                <div className="relative mt-5">
                    <input
                        id="username"
                        type="text"
                        placeholder=" "
                        className="peer absolute left-0 top-0 z-0 w-full rounded-lg border border-[#999999] px-4 py-3 font-medium text-black outline-0 focus:border-2 focus:border-primary focus:bg-primary/10"
                    />
                    <label
                        htmlFor="username"
                        className="absolute left-4 top-[-12px] z-40 bg-white px-2 text-sm font-medium text-[#868686] peer-focus:bg-primary/10 peer-focus:text-sm peer-focus:text-primary">
                        <span className="mr-1 text-primary">*</span>Username or email address
                    </label>
                </div>
            </form>
        </div>
    );
}

export default CreateAccount;
