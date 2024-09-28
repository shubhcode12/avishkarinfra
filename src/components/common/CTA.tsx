import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section className="w-full flex flex-col justify-center px-2 py-24 lg:px-10">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex justify-center items-center w-full gap-8">
            <div className="flex flex-col justify-end w-full gap-4">
              <div className="text-6xl font-semibold text-secondary max-w-lg">
                Still cant find right Properties?
              </div>
              <div className="text-secondaryLight max-w-sm text-xl">
                Are you interested in a property or have any other inquiries?
              </div>
            </div>
            <div className="w-2/3 mt-3">
              <div className="text-[#596460] text-lg">
                Subscribe to our newsletter to get the latest news and updates
                about our properties and services.
              </div>
              <div className="flex w-full mt-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="py-6 rounded-none !rounded-l focus-visible:ring-0 focus-visible:ring-offset-1 focus:border-none"
                />
                <button className="!rounded-none !rounded-r bg-primary text-white px-6 py-3">
                  Submit
                </button>
              </div>
              <div className="text-secondaryLight font-normal text-sm mt-2">
                *We doesn’t spam. You can unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
