import type { ResearchPost } from "./research-data";

export const november06ResearchPosts: ResearchPost[] = [
  {
    "slug": "how-complete-is-the-account-health-evidence-before-a-qbr",
    "title": "How complete is the account health evidence before a QBR?",
    "excerpt": "A protocol for measuring whether each account health score names its source, date, and reviewer.",
    "cluster": "Evidence Quality",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/how-complete-is-the-account-health-evidence-before-a-qbr.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the account health score review, The question is narrow: what can the account health record show about proof, timing, and closure without relying on memory? For the research question and scope step of the account health score review, State the account health score population before collection so the denominator cannot drift toward easy requests. For the research question and scope step of the account health score review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data.",
          "For the research question and scope step of the account health score review, The unit is one account health record, from opening event to loged resolution, with linked events counted separately. For the research question and scope step of the account health score review, A dry run on one account health score request is cheaper than finding a definition error after full collection."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the account health score review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently. For the population and unit of analysis step of the account health score review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the population and unit of analysis step of the account health score review, Record one ordinary account health score request, one exception, and one reopened item so the sample reflects the real mix. The account pipeline shows both the request date and the coordinator who accepted it.",
          "For the population and unit of analysis step of the account health score review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the population and unit of analysis step of the account health score review, Every request needs the origin, observation time, field supported, and the reviewer who checked it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the account health score review, A current screenshot cannot prove what the account health record said earlier, so log the version or observation date. For the definitions and measures step of the account health score review, Mark missing, unavailable, and confirmed negative values separately. For the definitions and measures step of the account health score review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. A later lead can confirm the same detail on the CRM entry and the approved plan.",
          "For the definitions and measures step of the account health score review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the definitions and measures step of the account health score review, Report the limit beside the finding so the reader can judge both."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the account health score review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the evidence standard step of the account health score review, If the report cannot be reproduced from its origins, treat that as a finding about the log. For the evidence standard step of the account health score review, Set a disposal date for the research file and log access, because an archive without an end date is a liability.",
          "For the evidence standard step of the account health score review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. For the evidence standard step of the account health score review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the account health score review, The aim is to let the account lead review account health score against the same definitions each time. For the sampling and collection step of the account health score review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks. For the sampling and collection step of the account health score review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For client accounts, the queue item and the client update must agree before review.",
          "For the sampling and collection step of the account health score review, Write the next check date before the review ends. For the sampling and collection step of the account health score review, The result is a description the account lead can review, not a verdict about the team."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the account health score review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log. For the analysis and reporting step of the account health score review, The definition should let a reviewer who missed the first pass apply it without asking for context. For the analysis and reporting step of the account health score review, If the origin changes mid-window, keep the original observation and add a dated note.",
          "For the analysis and reporting step of the account health score review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty. For the analysis and reporting step of the account health score review, Keep the method small enough to repeat and explicit enough to challenge."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the account health score review, The review should name which account health score steps create proof and which ones can lose it. For the limits and sources of error step of the account health score review, A finding about missing proof is still useful when the missing field is named precisely. For the limits and sources of error step of the account health score review, The question is narrow: what can the account health record show about proof, timing, and closure without relying on memory? The handoff note stays with the account file and the next checkpoint date.",
          "For the limits and sources of error step of the account health score review, State the account health score population before collection so the denominator cannot drift toward easy requests. For the limits and sources of error step of the account health score review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the account health score review, The unit is one account health record, from opening event to loged resolution, with linked events counted separately. For the review cadence step of the account health score review, A dry run on one account health score request is cheaper than finding a definition error after full collection. For the review cadence step of the account health score review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently.",
          "For the review cadence step of the account health score review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the review cadence step of the account health score review, Record one ordinary account health score request, one exception, and one reopened item so the sample reflects the real mix."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "account health record"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the account health score review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "can-a-renewal-risk-flag-be-reproduced-from-its-sources",
    "title": "Can a renewal risk flag be reproduced from its sources?",
    "excerpt": "A method for testing whether a renewal flag can be rebuilt from the signal, the date, and the reviewer.",
    "cluster": "Record Reliability",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/can-a-renewal-risk-flag-be-reproduced-from-its-sources.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the renewal risk flag review, Record one ordinary renewal risk flag request, one exception, and one reopened item so the sample reflects the real mix. For the research question and scope step of the renewal risk flag review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the research question and scope step of the renewal risk flag review, Every request needs the origin, observation time, field supported, and the reviewer who checked it.",
          "For the research question and scope step of the renewal risk flag review, A current screenshot cannot prove what the renewal record said earlier, so log the version or observation date. For the research question and scope step of the renewal risk flag review, Mark missing, unavailable, and confirmed negative values separately."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the renewal risk flag review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. For the population and unit of analysis step of the renewal risk flag review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the population and unit of analysis step of the renewal risk flag review, Report the limit beside the finding so the reader can judge both. Judgment stays with the account lead; the coordinator records only what was checked and when.",
          "For the population and unit of analysis step of the renewal risk flag review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the population and unit of analysis step of the renewal risk flag review, If the report cannot be reproduced from its origins, treat that as a finding about the log."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the renewal risk flag review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. For the definitions and measures step of the renewal risk flag review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. For the definitions and measures step of the renewal risk flag review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. The next shift can act on the entry without calling the coordinator who prepared it.",
          "For the definitions and measures step of the renewal risk flag review, The aim is to let the account lead review renewal risk flag against the same definitions each time. For the definitions and measures step of the renewal risk flag review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the renewal risk flag review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For the evidence standard step of the renewal risk flag review, Write the next check date before the review ends. For the evidence standard step of the renewal risk flag review, The result is a description the account lead can review, not a verdict about the team.",
          "For the evidence standard step of the renewal risk flag review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log. For the evidence standard step of the renewal risk flag review, The definition should let a reviewer who missed the first pass apply it without asking for context."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the renewal risk flag review, If the origin changes mid-window, keep the original observation and add a dated note. For the sampling and collection step of the renewal risk flag review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty. For the sampling and collection step of the renewal risk flag review, Keep the method small enough to repeat and explicit enough to challenge.",
          "For the sampling and collection step of the renewal risk flag review, The review should name which renewal risk flag steps create proof and which ones can lose it. For the sampling and collection step of the renewal risk flag review, A finding about missing proof is still useful when the missing field is named precisely."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the renewal risk flag review, The question is narrow: what can the renewal record show about proof, timing, and closure without relying on memory? For the analysis and reporting step of the renewal risk flag review, State the renewal risk flag population before collection so the denominator cannot drift toward easy requests. For the analysis and reporting step of the renewal risk flag review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data.",
          "For the analysis and reporting step of the renewal risk flag review, The unit is one renewal record, from opening event to loged resolution, with linked events counted separately. For the analysis and reporting step of the renewal risk flag review, A dry run on one renewal risk flag request is cheaper than finding a definition error after full collection."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the renewal risk flag review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently. For the limits and sources of error step of the renewal risk flag review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the limits and sources of error step of the renewal risk flag review, Record one ordinary renewal risk flag request, one exception, and one reopened item so the sample reflects the real mix.",
          "For the limits and sources of error step of the renewal risk flag review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the limits and sources of error step of the renewal risk flag review, Every request needs the origin, observation time, field supported, and the reviewer who checked it."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the renewal risk flag review, A current screenshot cannot prove what the renewal record said earlier, so log the version or observation date. For the review cadence step of the renewal risk flag review, Mark missing, unavailable, and confirmed negative values separately. For the review cadence step of the renewal risk flag review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. The account lead can trace the entry to the source document and the date it was confirmed.",
          "For the review cadence step of the renewal risk flag review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the review cadence step of the renewal risk flag review, Report the limit beside the finding so the reader can judge both."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "renewal record"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the renewal risk flag review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "how-old-are-open-client-escalations-in-the-account-queue",
    "title": "How old are open client escalations in the account queue?",
    "excerpt": "A dated aging review for client escalations that keeps the owner and the last client update visible.",
    "cluster": "Aging Analysis",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/how-old-are-open-client-escalations-in-the-account-queue.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the client escalation review, Report the limit beside the finding so the reader can judge both. For the research question and scope step of the client escalation review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the research question and scope step of the client escalation review, If the report cannot be reproduced from its origins, treat that as a finding about the log.",
          "For the research question and scope step of the client escalation review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. For the research question and scope step of the client escalation review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the client escalation review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. For the population and unit of analysis step of the client escalation review, The aim is to let the account lead review client escalation against the same definitions each time. For the population and unit of analysis step of the client escalation review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks.",
          "For the population and unit of analysis step of the client escalation review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For the population and unit of analysis step of the client escalation review, Write the next check date before the review ends."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the client escalation review, The result is a description the account lead can review, not a verdict about the team. For the definitions and measures step of the client escalation review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log. For the definitions and measures step of the client escalation review, The definition should let a reviewer who missed the first pass apply it without asking for context.",
          "For the definitions and measures step of the client escalation review, If the origin changes mid-window, keep the original observation and add a dated note. For the definitions and measures step of the client escalation review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the client escalation review, Keep the method small enough to repeat and explicit enough to challenge. For the evidence standard step of the client escalation review, The review should name which client escalation steps create proof and which ones can lose it. For the evidence standard step of the client escalation review, A finding about missing proof is still useful when the missing field is named precisely. Each exception carries the account key, the review date, and the named owner who decided it.",
          "For the evidence standard step of the client escalation review, The question is narrow: what can the escalation record show about proof, timing, and closure without relying on memory? For the evidence standard step of the client escalation review, State the client escalation population before collection so the denominator cannot drift toward easy requests."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the client escalation review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data. For the sampling and collection step of the client escalation review, The unit is one escalation record, from opening event to loged resolution, with linked events counted separately. For the sampling and collection step of the client escalation review, A dry run on one client escalation request is cheaper than finding a definition error after full collection.",
          "For the sampling and collection step of the client escalation review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently. For the sampling and collection step of the client escalation review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the client escalation review, Record one ordinary client escalation request, one exception, and one reopened item so the sample reflects the real mix. For the analysis and reporting step of the client escalation review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the analysis and reporting step of the client escalation review, Every request needs the origin, observation time, field supported, and the reviewer who checked it.",
          "For the analysis and reporting step of the client escalation review, A current screenshot cannot prove what the escalation record said earlier, so log the version or observation date. For the analysis and reporting step of the client escalation review, Mark missing, unavailable, and confirmed negative values separately."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the client escalation review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. For the limits and sources of error step of the client escalation review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the limits and sources of error step of the client escalation review, Report the limit beside the finding so the reader can judge both. The renewal queue keeps the signal, the date, and the owner in the same entry.",
          "For the limits and sources of error step of the client escalation review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the limits and sources of error step of the client escalation review, If the report cannot be reproduced from its origins, treat that as a finding about the log."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the client escalation review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. For the review cadence step of the client escalation review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. For the review cadence step of the client escalation review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. This is how the team keeps a health signal visible after the QBR is delivered.",
          "For the review cadence step of the client escalation review, The aim is to let the account lead review client escalation against the same definitions each time. For the review cadence step of the client escalation review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "escalation record"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the client escalation review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "do-qbr-packs-match-the-approved-account-plan",
    "title": "Do QBR packs match the approved account plan?",
    "excerpt": "A protocol for comparing each QBR claim with the approved plan and the source report.",
    "cluster": "Reporting Quality",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/do-qbr-packs-match-the-approved-account-plan.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the QBR pack review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks. For the research question and scope step of the QBR pack review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For the research question and scope step of the QBR pack review, Write the next check date before the review ends.",
          "For the research question and scope step of the QBR pack review, The result is a description the account lead can review, not a verdict about the team. For the research question and scope step of the QBR pack review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the QBR pack review, The definition should let a reviewer who missed the first pass apply it without asking for context. For the population and unit of analysis step of the QBR pack review, If the origin changes mid-window, keep the original observation and add a dated note. For the population and unit of analysis step of the QBR pack review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty.",
          "For the population and unit of analysis step of the QBR pack review, Keep the method small enough to repeat and explicit enough to challenge. For the population and unit of analysis step of the QBR pack review, The review should name which QBR pack steps create proof and which ones can lose it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the QBR pack review, A finding about missing proof is still useful when the missing field is named precisely. For the definitions and measures step of the QBR pack review, The question is narrow: what can the QBR pack show about proof, timing, and closure without relying on memory? For the definitions and measures step of the QBR pack review, State the QBR pack population before collection so the denominator cannot drift toward easy requests.",
          "For the definitions and measures step of the QBR pack review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data. For the definitions and measures step of the QBR pack review, The unit is one QBR pack, from opening event to loged resolution, with linked events counted separately."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the QBR pack review, A dry run on one QBR pack request is cheaper than finding a definition error after full collection. For the evidence standard step of the QBR pack review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently. For the evidence standard step of the QBR pack review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests.",
          "For the evidence standard step of the QBR pack review, Record one ordinary QBR pack request, one exception, and one reopened item so the sample reflects the real mix. For the evidence standard step of the QBR pack review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the QBR pack review, Every request needs the origin, observation time, field supported, and the reviewer who checked it. For the sampling and collection step of the QBR pack review, A current screenshot cannot prove what the QBR pack said earlier, so log the version or observation date. For the sampling and collection step of the QBR pack review, Mark missing, unavailable, and confirmed negative values separately.",
          "For the sampling and collection step of the QBR pack review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. For the sampling and collection step of the QBR pack review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the QBR pack review, Report the limit beside the finding so the reader can judge both. For the analysis and reporting step of the QBR pack review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the analysis and reporting step of the QBR pack review, If the report cannot be reproduced from its origins, treat that as a finding about the log.",
          "For the analysis and reporting step of the QBR pack review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. For the analysis and reporting step of the QBR pack review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the QBR pack review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. For the limits and sources of error step of the QBR pack review, The aim is to let the account lead review QBR pack against the same definitions each time. For the limits and sources of error step of the QBR pack review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks.",
          "For the limits and sources of error step of the QBR pack review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For the limits and sources of error step of the QBR pack review, Write the next check date before the review ends."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the QBR pack review, The result is a description the account lead can review, not a verdict about the team. For the review cadence step of the QBR pack review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log. For the review cadence step of the QBR pack review, The definition should let a reviewer who missed the first pass apply it without asking for context.",
          "For the review cadence step of the QBR pack review, If the origin changes mid-window, keep the original observation and add a dated note. For the review cadence step of the QBR pack review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "QBR pack"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the QBR pack review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "how-many-service-credits-lack-a-dated-approval",
    "title": "How many service credits lack a dated approval?",
    "excerpt": "A sampling design for service credits that separates a missing approval from a late one.",
    "cluster": "Exception Control",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/how-many-service-credits-lack-a-dated-approval.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the service credit review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty. For the research question and scope step of the service credit review, Keep the method small enough to repeat and explicit enough to challenge. For the research question and scope step of the service credit review, The review should name which service credit steps create proof and which ones can lose it.",
          "For the research question and scope step of the service credit review, A finding about missing proof is still useful when the missing field is named precisely. For the research question and scope step of the service credit review, The question is narrow: what can the service credit request show about proof, timing, and closure without relying on memory?"
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the service credit review, State the service credit population before collection so the denominator cannot drift toward easy requests. For the population and unit of analysis step of the service credit review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data. For the population and unit of analysis step of the service credit review, The unit is one service credit request, from opening event to loged resolution, with linked events counted separately.",
          "For the population and unit of analysis step of the service credit review, A dry run on one service credit request is cheaper than finding a definition error after full collection. For the population and unit of analysis step of the service credit review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the service credit review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the definitions and measures step of the service credit review, Record one ordinary service credit request, one exception, and one reopened item so the sample reflects the real mix. For the definitions and measures step of the service credit review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer.",
          "For the definitions and measures step of the service credit review, Every request needs the origin, observation time, field supported, and the reviewer who checked it. For the definitions and measures step of the service credit review, A current screenshot cannot prove what the service credit request said earlier, so log the version or observation date."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the service credit review, Mark missing, unavailable, and confirmed negative values separately. For the evidence standard step of the service credit review, The primary measure needs a denominator and a window; without both, a percentage is only a mood. For the evidence standard step of the service credit review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. The QBR pack compares the slide with the approved plan and the source report.",
          "For the evidence standard step of the service credit review, Report the limit beside the finding so the reader can judge both. For the evidence standard step of the service credit review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the service credit review, If the report cannot be reproduced from its origins, treat that as a finding about the log. For the sampling and collection step of the service credit review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. For the sampling and collection step of the service credit review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. The service credit review links the calculation to the SLA and the approver.",
          "For the sampling and collection step of the service credit review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. For the sampling and collection step of the service credit review, The aim is to let the account lead review service credit against the same definitions each time."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the service credit review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks. For the analysis and reporting step of the service credit review, A request where the account lead intervened is useful because it shows which field the routine did not settle. For the analysis and reporting step of the service credit review, Write the next check date before the review ends. The follow-up list shows the owner, the promised date, and the acceptance.",
          "For the analysis and reporting step of the service credit review, The result is a description the account lead can review, not a verdict about the team. For the analysis and reporting step of the service credit review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the service credit review, The definition should let a reviewer who missed the first pass apply it without asking for context. For the limits and sources of error step of the service credit review, If the origin changes mid-window, keep the original observation and add a dated note. For the limits and sources of error step of the service credit review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty.",
          "For the limits and sources of error step of the service credit review, Keep the method small enough to repeat and explicit enough to challenge. For the limits and sources of error step of the service credit review, The review should name which service credit steps create proof and which ones can lose it."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the service credit review, A finding about missing proof is still useful when the missing field is named precisely. For the review cadence step of the service credit review, The question is narrow: what can the service credit request show about proof, timing, and closure without relying on memory? For the review cadence step of the service credit review, State the service credit population before collection so the denominator cannot drift toward easy requests.",
          "For the review cadence step of the service credit review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data. For the review cadence step of the service credit review, The unit is one service credit request, from opening event to loged resolution, with linked events counted separately."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "service credit request"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the service credit review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "does-meeting-follow-up-reach-a-named-owner",
    "title": "Does meeting follow-up reach a named owner?",
    "excerpt": "A protocol for checking whether each follow-up item names an owner and an accepted date.",
    "cluster": "Ownership",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/does-meeting-follow-up-reach-a-named-owner.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the meeting follow-up review, The unit is one follow-up item, from opening event to loged resolution, with linked events counted separately. For the research question and scope step of the meeting follow-up review, A dry run on one meeting follow-up request is cheaper than finding a definition error after full collection. For the research question and scope step of the meeting follow-up review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently.",
          "For the research question and scope step of the meeting follow-up review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the research question and scope step of the meeting follow-up review, Record one ordinary meeting follow-up request, one exception, and one reopened item so the sample reflects the real mix."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the meeting follow-up review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the population and unit of analysis step of the meeting follow-up review, Every request needs the origin, observation time, field supported, and the reviewer who checked it. For the population and unit of analysis step of the meeting follow-up review, A current screenshot cannot prove what the follow-up item said earlier, so log the version or observation date.",
          "For the population and unit of analysis step of the meeting follow-up review, Mark missing, unavailable, and confirmed negative values separately. For the population and unit of analysis step of the meeting follow-up review, The primary measure needs a denominator and a window; without both, a percentage is only a mood."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the meeting follow-up review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the definitions and measures step of the meeting follow-up review, Report the limit beside the finding so the reader can judge both. For the definitions and measures step of the meeting follow-up review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items.",
          "For the definitions and measures step of the meeting follow-up review, If the report cannot be reproduced from its origins, treat that as a finding about the log. For the definitions and measures step of the meeting follow-up review, Set a disposal date for the research file and log access, because an archive without an end date is a liability."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the meeting follow-up review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. For the evidence standard step of the meeting follow-up review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. For the evidence standard step of the meeting follow-up review, The aim is to let the account lead review meeting follow-up against the same definitions each time.",
          "For the evidence standard step of the meeting follow-up review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks. For the evidence standard step of the meeting follow-up review, A request where the account lead intervened is useful because it shows which field the routine did not settle."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the meeting follow-up review, Write the next check date before the review ends. For the sampling and collection step of the meeting follow-up review, The result is a description the account lead can review, not a verdict about the team. For the sampling and collection step of the meeting follow-up review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log.",
          "For the sampling and collection step of the meeting follow-up review, The definition should let a reviewer who missed the first pass apply it without asking for context. For the sampling and collection step of the meeting follow-up review, If the origin changes mid-window, keep the original observation and add a dated note."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the meeting follow-up review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty. For the analysis and reporting step of the meeting follow-up review, Keep the method small enough to repeat and explicit enough to challenge. For the analysis and reporting step of the meeting follow-up review, The review should name which meeting follow-up steps create proof and which ones can lose it.",
          "For the analysis and reporting step of the meeting follow-up review, A finding about missing proof is still useful when the missing field is named precisely. For the analysis and reporting step of the meeting follow-up review, The question is narrow: what can the follow-up item show about proof, timing, and closure without relying on memory?"
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the meeting follow-up review, State the meeting follow-up population before collection so the denominator cannot drift toward easy requests. For the limits and sources of error step of the meeting follow-up review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data. For the limits and sources of error step of the meeting follow-up review, The unit is one follow-up item, from opening event to loged resolution, with linked events counted separately.",
          "For the limits and sources of error step of the meeting follow-up review, A dry run on one meeting follow-up request is cheaper than finding a definition error after full collection. For the limits and sources of error step of the meeting follow-up review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the meeting follow-up review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the review cadence step of the meeting follow-up review, Record one ordinary meeting follow-up request, one exception, and one reopened item so the sample reflects the real mix. For the review cadence step of the meeting follow-up review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer.",
          "For the review cadence step of the meeting follow-up review, Every request needs the origin, observation time, field supported, and the reviewer who checked it. For the review cadence step of the meeting follow-up review, A current screenshot cannot prove what the follow-up item said earlier, so log the version or observation date."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "follow-up item"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the meeting follow-up review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  },
  {
    "slug": "how-much-account-rework-comes-from-unclear-intake",
    "title": "How much account rework comes from unclear intake?",
    "excerpt": "A method for grouping returned account items by cause without hiding the oldest case.",
    "cluster": "Rework Analysis",
    "published": "2026-11-06",
    "datePublished": "2026-11-06",
    "updated": "2026-11-06",
    "hero": "/thumbnails/november-06/how-much-account-rework-comes-from-unclear-intake.png",
    "headlineStat": "A defined sample, not a verdict.",
    "statSource": "Method note",
    "takeaways": [
      "Name the source and the observation date.",
      "Keep the owner and the next action visible.",
      "Report the limit beside the finding."
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "For the research question and scope step of the account queue health review, A current screenshot cannot prove what the account queue item said earlier, so log the version or observation date. For the research question and scope step of the account queue health review, Mark missing, unavailable, and confirmed negative values separately. For the research question and scope step of the account queue health review, The primary measure needs a denominator and a window; without both, a percentage is only a mood.",
          "For the research question and scope step of the account queue health review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the research question and scope step of the account queue health review, Report the limit beside the finding so the reader can judge both."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "For the population and unit of analysis step of the account queue health review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. For the population and unit of analysis step of the account queue health review, If the report cannot be reproduced from its origins, treat that as a finding about the log. For the population and unit of analysis step of the account queue health review, Set a disposal date for the research file and log access, because an archive without an end date is a liability. The escalation log carries the client statement, the owner, and the closing update.",
          "For the population and unit of analysis step of the account queue health review, Use a pseudonymous request key and keep the crosswalk in an approved system with restricted access. For the population and unit of analysis step of the account queue health review, When the sample is challenged, the defense is the collection log, the exclusions, and the definitions."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For the definitions and measures step of the account queue health review, The aim is to let the account lead review account queue health against the same definitions each time. For the definitions and measures step of the account queue health review, Track the age of the oldest open item alongside the count, because averages hide a request that sat for weeks. For the definitions and measures step of the account queue health review, A request where the account lead intervened is useful because it shows which field the routine did not settle.",
          "For the definitions and measures step of the account queue health review, Write the next check date before the review ends. For the definitions and measures step of the account queue health review, The result is a description the account lead can review, not a verdict about the team."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For the evidence standard step of the account queue health review, Supporting measures should cover missing fields, exception age, and resolutions confirmed on a destination log. For the evidence standard step of the account queue health review, The definition should let a reviewer who missed the first pass apply it without asking for context. For the evidence standard step of the account queue health review, If the origin changes mid-window, keep the original observation and add a dated note.",
          "For the evidence standard step of the account queue health review, For account leads and client operations teams, the useful output is a short finding with a clear limit, not a dashboard that implies certainty. For the evidence standard step of the account queue health review, Keep the method small enough to repeat and explicit enough to challenge."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For the sampling and collection step of the account queue health review, The review should name which account queue health steps create proof and which ones can lose it. For the sampling and collection step of the account queue health review, A finding about missing proof is still useful when the missing field is named precisely. For the sampling and collection step of the account queue health review, The question is narrow: what can the account queue item show about proof, timing, and closure without relying on memory?",
          "For the sampling and collection step of the account queue health review, State the account queue health population before collection so the denominator cannot drift toward easy requests. For the sampling and collection step of the account queue health review, Fix the start event, stop event, pause rule, and treatment of missing proof before collecting data."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For the analysis and reporting step of the account queue health review, The unit is one account queue item, from opening event to loged resolution, with linked events counted separately. For the analysis and reporting step of the account queue health review, A dry run on one account queue health request is cheaper than finding a definition error after full collection. For the analysis and reporting step of the account queue health review, Decide whether a reopened request is new or continues the old one, and apply that rule consistently.",
          "For the analysis and reporting step of the account queue health review, If a definition changes mid-review, keep the earlier classification and label the new rule for later requests. For the analysis and reporting step of the account queue health review, Record one ordinary account queue health request, one exception, and one reopened item so the sample reflects the real mix."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "For the limits and sources of error step of the account queue health review, The {pipeline} offers natural strata: new items, carried items, and items returned by a reviewer. For the limits and sources of error step of the account queue health review, Every request needs the origin, observation time, field supported, and the reviewer who checked it. For the limits and sources of error step of the account queue health review, A current screenshot cannot prove what the account queue item said earlier, so log the version or observation date.",
          "For the limits and sources of error step of the account queue health review, Mark missing, unavailable, and confirmed negative values separately. For the limits and sources of error step of the account queue health review, The primary measure needs a denominator and a window; without both, a percentage is only a mood."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "For the review cadence step of the account queue health review, The protocol should state what it does not measure, including judgment quality and outcomes outside the log. For the review cadence step of the account queue health review, Report the limit beside the finding so the reader can judge both. For the review cadence step of the account queue health review, Each request carries an opening count, additions, withdrawals, resolutions, and unresolved items. The account lead keeps the commercial decision, and the coordinator records only the dated evidence.",
          "For the review cadence step of the account queue health review, If the report cannot be reproduced from its origins, treat that as a finding about the log. For the review cadence step of the account queue health review, Set a disposal date for the research file and log access, because an archive without an end date is a liability."
        ]
      }
    ],
    "table": {
      "headers": [
        "Item",
        "Rule"
      ],
      "rows": [
        [
          "Unit",
          "account queue item"
        ],
        [
          "Window",
          "One review cycle"
        ],
        [
          "Exclusions",
          "Recorded and dated"
        ]
      ]
    },
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "date": "2024",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public risk-management guidance."
      },
      {
        "name": "U.S. Small Business Administration",
        "date": "2024",
        "url": "https://www.sba.gov/",
        "note": "Small-business operations guidance."
      },
      {
        "name": "GAO Green Book",
        "date": "2014",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Internal control guidance."
      }
    ],
    "faqs": [
      {
        "q": "What does the account queue health review measure?",
        "a": "It measures what the record can show, not the quality of the underlying decision."
      }
    ],
    "related": [],
    "internalLinks": [
      {
        "label": "account support services",
        "href": "/services"
      }
    ],
    "serviceHandoff": {
      "before": "Use the evidence and boundary language when scoping the role.",
      "label": "Review account support services",
      "href": "/services",
      "after": "Keep commercial decisions with the account lead."
    }
  }
];
