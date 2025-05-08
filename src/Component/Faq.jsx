import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="card-bg rounded-2xl">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-bold sm:text-4xl font text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 paragraph text-center">
            Have questions about planning your next big event with us? Here are
            some common inquiries we get from our clients.
          </p>
          <div className="space-y-4">
            <details className="w-full border border-white rounded-lg">
              <summary className="px-4 py-6 focus:outline-none  font focus-visible:dark:ring-violet-600">
                What types of events do you manage?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 paragraph ">
                We manage a wide range of events, including weddings, corporate
                conferences, product launches, birthdays, exhibitions, and
                private parties. Whether it's an intimate gathering or a
                grand-scale celebration, our team brings creativity and
                professionalism to every project.
              </p>
            </details>
            <details className="w-full border border-white rounded-lg">
              <summary className="px-4 py-6 focus:outline-none  font focus-visible:dark:ring-violet-600">
                Can I customize my event package based on my budget?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 paragraph">
                Yes, absolutely! We offer flexible and customizable packages to
                fit various budgets. From minimal décor to luxury experiences,
                we work closely with you to create a plan that meets your vision
                without compromising on quality.
              </p>
            </details>
            <details className="w-full border border-white rounded-lg">
              <summary className="px-4 py-6 focus:outline-none font focus-visible:dark:ring-violet-600">
                Do you offer venue selection and decoration services?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 paragraph">
                Yes, we assist with every step of the planning process,
                including venue scouting, booking, and theme-based decoration.
                Whether you prefer a romantic outdoor setup or a professional
                indoor ambiance, we curate spaces that align with your event
                goals.
              </p>
            </details>
            <details className="w-full border border-white rounded-lg">
              <summary className="px-4 py-6 focus:outline-none font focus-visible:dark:ring-violet-600">
                How early should I book your services?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 paragraph">
                We recommend booking 3–6 months in advance to secure your
                preferred date and venue. For large-scale events or destination
                weddings, earlier planning (6–12 months) ensures seamless
                execution and availability of top vendors.
              </p>
            </details>
            <details className="w-full border border-white rounded-lg">
              <summary className="px-4 py-6 focus:outline-none font focus-visible:dark:ring-violet-600">
                What happens if there’s a last-minute change or cancellation?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 paragraph">
                We understand that life is unpredictable. In case of changes or
                cancellations, we have a flexible policy. Depending on the
                notice period, we offer rescheduling options or partial refunds.
                All terms are clearly outlined in the service agreement for your
                peace of mind.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
