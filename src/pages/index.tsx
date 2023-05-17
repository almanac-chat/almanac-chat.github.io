import Typewriter from 'typewriter-effect';
import { BoltIcon, UserGroupIcon, WrenchScrewdriverIcon} from '@heroicons/react/20/solid'
import React, { ReactElement } from 'react';

const features = [
  {
    name: 'Safety and Alignment',
    description:
        'We recognize the powerful role that large language models can play in the clinic, \
        as well as the potential dangers of careless deployment and use. As physicians it remains our responsibility to ensure \
        that these technologies are made safe and effective for our patients.',
    icon: BoltIcon,
  },
  {
    name: 'Reproducibility and Collaboration',
    description:
      'We believe that real progress is made when people work together in a continuous and iterative process, towards a common goal. \
       As such, we aim to develop and establish a suite of baselines and meaningful benchmarks to encourage open and reproducible research \
       for the benefit of the entire medical community.',
    icon: UserGroupIcon,
  },
  {
    name: 'Accessibility and Cost',
    description:
      'Large language model research can be prohibitively expensive and inaccessible to many healthcare professionals and researchers. \
      We aim to democratize access to these technologies by developing models that can be trained, deployed, and evaluated on consumer hardware.',
    icon: WrenchScrewdriverIcon,
  },
]

const people = [
  {
    name: 'Cyril Zakka, MD',
    role: 'Stanford Medicine',
    imageUrl:
      'https://profiles.stanford.edu/proxy/api/cap/profiles/283170/resources/profilephoto/350x350.1658926204988.jpg',
  },
  {
    name: 'Akash Chaurasia, BS',
    role: 'Stanford Engineering',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1618081315668242432/7iqzoKGG_400x400.jpg',
  },
  {
    name: 'Rohan Shad, MD',
    role: 'Penn Medicine',
    imageUrl:
      'https://i1.rgstatic.net/ii/profile.image/1060376884031489-1629824958752_Q128/Rohan-Shad.jpg',
  },
  {
    name: 'Michael Moor, MD PhD',
    role: 'Stanford Engineering',
    imageUrl:
      'https://michaelmoor.ml/img/portrait_small25.png',
  },
  {
    name: 'Katie Link, BS',
    role: 'Hugging Face',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1145095140748382208/C_IqI44j_400x400.png',
  },
]

const advisors = [
  {
    name: 'William Hiesinger, MD',
    role: 'Stanford Medicine',
    imageUrl:
      'https://profiles.stanford.edu/proxy/api/cap/profiles/84139/resources/profilephoto/350x350.1663867415105.jpg',
  },
  {
    name: 'Pranav Rajpurkar, PhD',
    role: 'Havard Medical School',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/631510b315db3003bd37d753/284407b3-9a2a-4f25-abee-f4411eeb860c/headshot.jpg?format=750w',
  },
  {
    name: 'Jure Leskovec, PhD',
    role: 'Stanford Engineering',
    imageUrl:
      'https://law.stanford.edu/wp-content/uploads/2016/07/Jure-12_a-400x400.jpg',
  },
]

const stats = [
  { label: 'Parameters', value: '7 billion +' },
  { label: 'Clinical Reports', value: '1.5 million +' },
  { label: 'Instructions', value: '80K +' },
  { label: 'Medical articles', value: '18K +' },
]

const navigation = {
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },    
    {
      name: 'Twitter',
      href: 'https://twitter.com/hiesingerlab',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Home() {

  return (
    <div className="relative isolate overflow-hidden bg-gray-800">
      <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-teal-900/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#50ffd6] to-[#0a7d4b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 sm:flex sm:justify-center">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-400 ring-1 ring-inset ring-teal-500/20">
                    Introducing Almanac Chat
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Clinical documentation
              </h1>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-teal-950"> made simple.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Almanac Chat is a research collaboration between like-minded researchers to bring robust and transparent generative AI to clinical medicine.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://forms.gle/ftpw7twdSyRn4mjC9"
                  className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  Get in Touch
                </a>
                <a href="https://github.com/almanac-chat/almanac-chat" className="text-sm font-semibold leading-6 text-white">
                  View on Github <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-10 flow-root sm:mt-24">
              <div className="mx-auto max-w-7xl rounded-xl bg-zinc-900 p-7 ring-1 min-h-[350px] ring-inset ring-zinc-900/10 lg:rounded-2xl lg:p-10 text-white">
                <div className="placeholder-text mb-12">
                  <h1 className="text-gray-200 lg:flex items-start">
                    <span className="inline-block rounded-full bg-teal-100/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-100 mr-4 mb-3">Prompt</span>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(1)
                          .typeString('A 56 year old male patient with atrial fibrillation presents to the clinic. Given their history of heart failure, diabetes and PAD, what is their risk of stroke? Should they be placed on anticoagulation?')
                          .callFunction((state) => {
                            state.elements.cursor.style.animation = 'none'
                            state.elements.cursor.style.display = 'none'
                          })
                          .start();
                      }}
                    />
                  </h1>
                </div>

                <div className="scrollable-typewriter h-full overflow-y-auto">
                  <h1 className="text-gray-200 lg:flex items-start">
                    <span className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold leading-200 text-teal-400 mr-2 mb-3">Almanac</span>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(7500)
                          .changeDelay(1)
                          .changeDeleteSpeed(1)
                          .typeString('The risk of stroke can be estimated using a stroke assessment tool such as the CHA2DS2-VASc score. For this patient the CHA2DS2-VASc score would be as follows:\n\n\n\n<ul><li>• Heart failure: 1 point</li><li>• PAD: 1 point</li><li>• Diabetes: 1 point</li></ul>\n\n\n\n\n With a total score of 3, the stroke risk per year is 3.2%. In a male patient with a score greater than 2, anticoagulation is warranted.')
                          .callFunction((state) => {
                            state.elements.cursor.style.animation = 'none'
                            state.elements.cursor.style.display = 'none'
                          })
                          .start();
                      }}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-170rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#50ffd6] to-[#0a7d4b] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-teal-400">State of the art</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Built from the ground up</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
              We recognize that the integration of AI language models in healthcare has the potential to revolutionize patient care, research, and medical education. 
              However, it is crucial to proceed with caution and rigorously evaluate these systems to address concerns regarding accuracy, bias, privacy, and the potential for unintended consequences.
              </p>
            </div>
            <div>
              <p>
              That's why we're building Almanac Chat - a multi-institutional effort to better understand the potential and limitations of these multimodal language models in healthcare.
              Our goal is to comprehensively evaluate these systems from the workbench to the bedside, in order to ensure that they are safe, effective, and equitable.
               
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-400">Fully transparent</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Meaningful and Reproducible Benchmarks
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
             The current landscape of generative AI in clinical medicine is fragmented and siloed.
             Despite the promise of these technologies, there exists a lack of transparency and reproducibility in the field.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              To address these challenges, we're developing Almanac Chat in the open, with a focus on three core principles:
              </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-teal-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>


      <div className="py-4 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-base font-semibold leading-7 text-teal-400">Built collaboratively</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Researchers</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          We're a small team of physicians and engineers dedicated to improving and evaluating the potentials and pitfalls of generative AI in medicine.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="mx-auto mt-10 text-base font-semibold leading-7 text-white">Advised by</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {advisors.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>


    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          &copy; 2023. All rights reserved.
        </p>
        {/* <div className='mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-400'>
        <a href="/privacy">Privacy policy</a>
        <div className="h-4 w-px bg-gray-400"></div>
        <a href="/tos">Terms of Service</a>
        </div> */}
      </div>
    </footer>
      </div>
    </div>
  )
}
