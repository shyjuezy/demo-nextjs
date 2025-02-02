import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
      </div>
    </footer>
  )
}

