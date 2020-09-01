export const ConfigurationMapping = [
  {
    id: 1,
    route: `${window.location.href}/resetTrade`,
    routeName: "Reset DayTrader (to be done before each run)",
    description:
      "Reset the DayTrader runtime to a clean starting point by logging off all users," +
      "removing new registrations and other general cleanup." +
      "For consistent results this URL should be run <b>before each</b> Trade run.",
  },
  {
    id: 2,
    route: `${window.location.href}/config`,
    routeName: "Configure DayTrader run-time parameters",
    description:
      "This link provides an interface to set configuration parameters that control " +
      "DayTrader run- time characteristics such as using EJBs or JDBC. " +
      "This link also provides utilities such as setting the UID and Password for a remote or " +
      "protected database when using JDBC.",
  },
  {
    id: 3,
    route: `${window.location.href}/buildDBTables`,
    routeName: "(Re)-create  DayTrader Database Tables and Indexes",
    description:
      "This link is used to (a) initially create or (b) drop and re-create the DayTrader tables." +
      "<b>A DayTrader database should exist before doing this action</b>, the existing DayTrader tables, " +
      "if any, are dropped, then new tables and indexes are created. " +
      "<b>Please stop and re- start the Daytrader application(or your application server) " +
      "after this action and then use the 'Repopulate DayTrader Database' " +
      "link below to repopulate the new database tables.</b>",
  },
  {
    id: 4,
    route: `${window.location.href}/buildDB`,
    routeName: "(Re)-populate  DayTrader Database",
    description:
      "This link is used to initially populate or re-populate the DayTrader database with fictitious users" +
      "(uid: 0, uid: 1, ...) and stocks(s: 0, s: 1, ...).First all existing users and stocks are deleted(if any)." +
      "The database is then populated with a new set of DayTrader users and stocks.This option does not drop and " +
      "recreate the Daytrader db tables.",
  },
  {
    id: 5,
    route: `${window.location.href}/scenario`,
    routeName: "Test DayTrader Scenario",
    description:
      'This links pops up a browser to manually step through a DayTrader scenario by hitting "Reload" on your browser',
  },
  {
    id: 6,
    route: `${window.location.href}/tradeversion`,
    routeName: "DayTrader Version",
    description: "DayTrader application version and change history information",
  },
];
