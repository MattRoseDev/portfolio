"use client";

import classNames from "classnames";
import { Section, Title } from "@/components/Section";
import { JOBS } from "@/constants";
import { formatJobDate } from "@/utils";
import size from "lodash/size";
import { Icon } from "@/components/Icon";

export function Experience() {
  return (
    <Section
      id="experience"
      className="w-full max-w-5xl pl-2 pr-3 pt-14 lg:px-0 lg:pt-20"
    >
      <Title className="ml-2">Work experience</Title>

      <div>
        {JOBS.map(
          ({ company, role, labels, dates, techStack, location }, index) => (
            <div
              key={`${company}-${role}`}
              className="relative flex flex-row gap-2"
            >
              <div>
                {size(JOBS) - 1 > index && (
                  <div
                    className={classNames(
                      "absolute bottom-0 left-[1rem] top-4 w-px md:left-[1.5rem] md:top-10",
                      index === 0
                        ? "bg-gradient-to-t from-gray-800 to-primary-500"
                        : "bg-gray-800",
                    )}
                  />
                )}
                <div
                  className={classNames(
                    "flex items-center justify-center",
                    "relative h-8 w-8 rounded-full md:h-12 md:w-12",
                    "border border-gray-800",
                    index === 0
                      ? "bg-gradient-radial from-gray-900 to-primary-950"
                      : "bg-gray-950",
                  )}
                >
                  <div
                    className={classNames(
                      "h-2 w-2 rounded-full md:h-3 md:w-3",
                      index === 0 ? "relative bg-primary-500" : "bg-gray-600",
                    )}
                  />
                  {!index && (
                    <div className="absolute inline-flex h-[50%] w-[50%] animate-ping rounded-full bg-primary-400 opacity-75" />
                  )}
                </div>
              </div>

              <div className="flex flex-col mb-16 lg:ml-8">
                <div className="flex flex-col items-start">
                  <span>
                    <div className="text-xl font-bold">{role}</div>
                    <div className="mt-1 flex items-center justify-start space-x-1.5">
                      <span>{company}</span>
                      {labels?.map(label => (
                        <div
                          key={label}
                          className="inline-flex rounded-md border border-gray-800 text-xs px-1.5 leading-5 text-gray-400 shadow-md"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </span>
                  <small className="font-mono text-sm text-gray-400 mt-1.5">
                    {formatJobDate(dates)}
                  </small>
                  <div className="font-mono flex items-center justify-start space-x-1.5 mt-2 mb-3">
                    <div className="flex items-center space-x-1.5">
                      <Icon name={location.flag} className="w-5 h-5" />
                      <span className="text-sm text-gray-400">
                        {location.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex max-w-lg flex-wrap items-center font-mono">
                  <span className="mr-2 mt-2 text-sm text-gray-400">
                    Skills:
                  </span>
                  {techStack.map(t => (
                    <span
                      key={`${company}-${t}`}
                      className="mr-2 mt-2 rounded-full px-2 py-1 text-xs bg-primary-400 bg-opacity-10 text-primary-500 shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
}
