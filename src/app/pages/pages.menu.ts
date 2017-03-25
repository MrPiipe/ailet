export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'ailet',
        data: {
          menu: {
            title: 'Ailets',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Devices',
              }
            }
          },
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Add an Ailet',
              }
            }
          },
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Manage Ailets',
              }
            }
          }
        ]
      },
      {
        path: 'statistics',
        data: {
          menu: {
            title: 'Statistics',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Graphs',
              }
            }
          },
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Numbers',
              }
            }
          }
        ]
      }
    ]
  }
];
