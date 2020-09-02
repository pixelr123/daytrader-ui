export const createDatabaseFields = [
  {
    columnName: 'Run-Time Mode',
    type: 'radio',
    values: [
      {
        name: 'Full EJB3',
      },
      {
        name: 'Direct (JDBC)',
      },
      {
        name: 'Session (EJB3) To Direct'
      }
    ],
    description:
      "Run Time Mode determines server implementation of the TradeServices to use in the DayTrader application" +
      "Enterprise Java Beans including Session, Entity and Message beans or Direct mode which uses direct database" +
      "and JMS access.See <a href='/faq'>DayTrader FAQ</a> for details."
  },
  {
    columnName: 'JPA Layer',
    type: 'radio',
    values: [
      {
        name: 'OpenJPA',
      },
      {
        name: 'Hibernate',
      },
    ],
    description:
      "Order Processing Mode determines the mode for completing stock purchase and sell operations." +
      "Synchronous mode completes the order immediately.Asychronous_2 - Phase performs a 2-phase" +
      "commit over the EJB Entity/ DB and MDB / JMS transactions." +
      "See <a href='/faq'>DayTrader FAQ</a> for details."
  },
  {
    columnName: 'Order-Processing Mode',
    type: 'radio',
    values: [
      {
        name: 'Synchronous',
      },
      {
        name: 'Asynchronous_2-Phase',
      },
    ],
    description:
      "Order Processing Mode determines the mode for completing stock purchase and sell operations." +
      "Synchronous mode completes the order immediately.Asychronous_2 - Phase performs a 2-phase commit over the EJB" +
      "Entity/ DB and MDB / JMS transactions.See <a href = '/faq'> DayTrader FAQ </a> for details."
  },
  {
    columnName: 'Scenario Workload Mix',
    type: 'radio',
    values: [
      {
        name: 'Standard',
      },
      {
        name: 'High-Volume',
      },
    ],
    description:
      "This setting determines the runtime workload mix of DayTrader operations when driving" +
      "the benchmark through TradeScenarioServlet.See <a href='/faq'> DayTrader FAQ</a> for details."
  },
  {
    columnName: 'WebInterface',
    type: 'radio',
    values: [
      {
        name: 'JSP',
      },
      {
        name: 'JSP-Image',
      },
    ],
    description:
      "This setting determines the Web interface technology used, JSPs or JSPs with static images and GIFs."
  }]
export const MiscellaneousSettings = [
  {
    type: 'input',
    values: [
      {
        name: 'DayTrader Max Users',
      },
      {
        name: 'Trade Max Quotes',
      },
    ],
    description:
      "By default the DayTrader database is populated with 200 users (uid:0 - uid:199) and 400 quotes (s:0 - s:399)."
  },
  {
    type: 'input',
    values: [
      {
        name: 'Market Summary Interval',
      },
    ],
    description:
      "< 0 Do not perform Market Summary Operations." +
      "<br>= 0 Perform market Summary on every request." +
      "<br>> 0 number of seconds between Market Summary Operations"
  },
  {
    type: 'input',
    values: [
      {
        name: 'Primitive Iteration',
      },
    ],
    description:
      "By default the DayTrader primitives are execute one operation per web request." +
      "Change this value to repeat operations multiple times per web request."
  },
  {
    type: 'checkbox',
    values: [
      {
        name: 'Publish Quote Updates',
      },
    ],
    description:
      "Publish quote price changes to a JMS topic."
  },
  {
    type: 'radio',
    values: [
      {
        name: 'Enable long run support',
      },
    ],
    description:
      "Enable long run support by disabling the show all orders query performed on the Account page."
  },
  {
    type: 'checkbox',
    values: [
      {
        name: 'Enable operation trace',
      },
      {
        name: 'Enable full trace',
      },
    ],
    description:
      "Enable DayTrader processing trace messages"
  },
]