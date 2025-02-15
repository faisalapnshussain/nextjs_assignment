'use client'
import Link from "next/link"

const Home = () => {
  return (
    <div className="margin-auto w-auto h-screen mt-8 mx-8">
      <ul className="flex gap-8 text-2xl">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li>Services<ul>
          <li><Link href="/services/app-development">Application Development</Link></li>
          <li><Link href="/services/web-development">Website Development</Link></li>
          </ul></li>
        </ul>
        <div className="gap-10">
Welcome to [Company Name] – Your Trusted Partner for Innovation and Excellence

At [Company Name], we believe in turning ideas into reality. We are a forward-thinking company dedicated to delivering cutting-edge solutions tailored to your needs. Whether you're looking for innovative technology, outstanding customer service, or expert industry insights, we are here to help you succeed.

Why Choose Us?

Expertise: Our team consists of seasoned professionals with a wealth of knowledge and experience in various industries.

Innovation: We stay ahead of the curve by embracing the latest technologies and trends.

Customer-Centric: Your satisfaction is our priority. We work closely with you to understand your goals and achieve exceptional results.

Our Services

[Service 1]

[Service 2]

[Service 3]

[Service 4]

Let's Build the Future Together
Join us on this journey towards success. Together, we can create something extraordinary.

Contact Us Today
Ready to get started? Reach out to our team to learn more about how [Company Name] can drive your business forward.

[Contact Button or Contact Information]
</div>
    </div>
  )
}

export default Home