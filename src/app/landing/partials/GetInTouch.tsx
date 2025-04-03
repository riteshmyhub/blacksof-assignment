import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function GetInTouch() {
   return (
      <section className="bg-[#0067B1] md:py-[48px]">
         <div className="grid grid-cols-12 w-[80%] md:w-[70%] mx-auto py-[48px]">
            <div className="col-span-12 md:col-span-6">
               <span className="font-semibold text-3xl md:text-[48px] text-white block">Get in touch</span>
               <span className="w-[48px] h-[3px] bg-white block my-5 md:my-[28px]" />
               <span className="block text-white text-xl md:text-[24px] font-light">For general enquiries</span>
               <span className="block mt-2 md:mt-[28px] text-white text-sm md:text-[20px] font-light">
                  <span className="font-normal">Address :</span>
                  <br /> 110, 16th Road, Chembur, Mumbai – 400071
               </span>
               <span className="block mt-2 md:mt-[28px] text-white text-sm md:text-[20px] font-light">
                  <span className="font-normal">Email : </span> <br />
                  <a href="mailto:info@supremegroup.co.in" target="_blank">
                     info@supremegroup.co.in
                  </a>
               </span>
            </div>
            <div className="col-span-12 md:col-span-6">
               <Formik
                  initialValues={{ fullName: "", email: "", subject: "", message: "" }}
                  validationSchema={Yup.object({
                     fullName: Yup.string().required("Full name is required"),
                     email: Yup.string().email("Invalid email").required("Email is required"),
                     subject: Yup.string().required("Subject is required"),
                     message: Yup.string().required("Message is required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                     console.log("Form submitted with values:", values);
                     setSubmitting(false);
                  }}>
                  {({ isSubmitting }) => (
                     <Form>
                        <div className="mt-8 md:mt-3">
                           <Field
                              type="text"
                              name="fullName"
                              className="sg-translate text-white placeholder:text-opacity-90 border-gray border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus:border-white border-[#309ae7]"
                              placeholder="Full name"
                           />
                           <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mt-5">
                           <Field
                              type="email"
                              name="email"
                              className="sg-translate text-white placeholder:text-opacity-90 border-gray border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus:border-white border-[#309ae7]"
                              placeholder="E-mail"
                           />
                           <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mt-5">
                           <Field
                              type="text"
                              name="subject"
                              className="sg-translate text-white placeholder:text-opacity-90 border-gray border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus:border-white border-[#309ae7]"
                              placeholder="Subject"
                           />
                           <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mt-5">
                           <Field
                              as="textarea"
                              rows={3}
                              name="message"
                              className="text-white placeholder:text-opacity-90 border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus:border-white border-[#309ae7]"
                              placeholder="Message"
                           />
                           <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mt-5">
                           <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold border border-white lg:text-base text-sm px-8 md:px-12 py-3 cursor-pointer w-full md:w-auto">
                              Send
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </div>
      </section>
   );
}
