import { useEffect } from "react";
import {
  Linkedin,
  Github,
  ExternalLink,
  Mail,
  Globe,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sinchana-h-04427528a/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Sinchana587",
    icon: Github,
    url: "https://github.com/Sinchana587",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Gmail",
    displayName: "Gmail",
    subText: "sinchana",
    icon: Mail,
    url: "mailto:sinchanasinchu2062004@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335] to-[#FFB900]",
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "sinchana",
    icon: Globe,
    url: "https://leetcode.com/u/Sinchhana_H/",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#F5F5F5]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.name === "LinkedIn");
  const github = socialLinks.find((link) => link.name === "GitHub");
  const gmail = socialLinks.find((link) => link.name === "Gmail");
  const leetcode = socialLinks.find((link) => link.name === "LeetCode");

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Full Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* GitHub - Full Row */}
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${github.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: github.color }}
              />
              <div className="relative p-2 rounded-md">
                <github.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: github.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {github.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {github.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Gmail & LeetCode - Two Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[gmail, leetcode].map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : "_blank"}
              rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className="group relative flex items-center justify-between p-4 rounded-lg 
                         bg-white/5 border border-white/10 overflow-hidden
                         hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                           bg-gradient-to-r ${link.gradient}`}
              />

              {/* Content Container */}
              <div className="relative flex items-center gap-4">
                {/* Icon Container */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                                   group-hover:scale-110 group-hover:opacity-30"
                    style={{ backgroundColor: link.color }}
                  />
                  <div className="relative p-2 rounded-md">
                    <link.icon
                      className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                      style={{ color: link.color }}
                    />
                  </div>
                </div>

                {/* Text Container */}
                <div className="flex flex-col">
                  <span className="text-base font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300 break-words">
                    {link.displayName}
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {link.subText}
                  </span>
                </div>
              </div>

              {/* External Link */}
              <ExternalLink
                className="relative w-5 h-5 text-gray-500 group-hover:text-white
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           transform group-hover:translate-x-0 -translate-x-1"
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;