
    (() => {
      Object.keys(navBar).map((key, index) => {
        Object.keys(navBar[key]).map(keySub => {
          if (keySub === 'columns') {
            // console.log(navBar[key][keySub][0].options);
            subNavItems.push(<div key={index + 1} className={styles.resNavItem}>{navBar[key][keySub][0].options}</div>);
            Object.keys(navBar[key][keySub][0].options).map(keySubSub => {
              if (typeof navBar[key][keySub][0].options[keySubSub].subOptions !== 'undefined') {
                // console.log(navBar[key][keySub][0].options[keySubSub].subOptions);
                subSubNavitems.push(<div key={index + 1} className={styles.resNavItem}>{navBar[key][keySub][0].options[keySubSub].subOptions}</div>);
              }
              return 0;
            });
          }

          return 0;
        });
        navItems[0].push(<div key={index} className={styles.resNavItem}>{navBar[key].label}</div>);
        return 0;
      });
    })();
