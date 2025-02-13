import { Code, Globe, Lightbulb, Rocket } from "lucide-react"

const features = [
  {
    name: "Web Development",
    description: "Build modern, responsive websites that engage your audience and drive results.",
    icon: Code,
  },
  {
    name: "Digital Strategy",
    description: "Create comprehensive digital strategies that align with your business goals.",
    icon: Lightbulb,
  },
  {
    name: "Global Reach",
    description: "Expand your reach with multilingual and culturally adapted solutions.",
    icon: Globe,
  },
  {
    name: "Fast Deployment",
    description: "Quick turnaround times with our efficient development process.",
    icon: Rocket,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Everything you need to succeed online
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

