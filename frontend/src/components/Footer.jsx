import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white">
                Mariposa Blog
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.mariposaweb.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mariposaweb
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/DanSimonson/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.facebook.com/mariposaweb.net/">
                  facebook
                </Footer.Link>
                <Footer.Link href="https://x.com/simonsondan?lang=en">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://mariposaweb.net"
            by="mariposaweb"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/mariposaweb.net/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://x.com/simonsondan?lang=en"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/DanSimonson/"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
