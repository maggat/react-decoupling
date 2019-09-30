

const obj = [
  {
    label: 'Activities',
    href: 'http://localhost:8080/back-office/sales/activities',
    access: ['salesRep'],
  },
  {
    label: 'Sales companies',
    access: ['superAdmin'],
    columns: [
      {
        options: [
          {
            label: 'Overview',
            href: 'http://localhost:8080/back-office/sales-companies',
            access: ['superAdmin'],
          }],
      }],
  },
  {
    label: 'Sales',
    access: ['salesRep', 'salesManager'],
    columns: [
      {
        options: [
          {
            label: 'Your Prospect Lists',
            href: 'http://localhost:8080/back-office/sales/prospect-lists',
            access: ['salesRep'],
          },
          {
            label: 'Your Orders',
            href: 'http://localhost:8080/back-office/sales',
            access: ['salesRep'],
          },
          {
            label: 'Team Orders',
            href: 'http://localhost:8080/back-office/sales/team',
            access: ['salesManager'],
          },
          {
            label: 'All Orders',
            href: 'http://localhost:8080/back-office/sales/offers',
          }],
      }],
  },
  {
    label: 'Quality Assurance',
    access: ['brand'],
    href: 'http://localhost:8080/back-office/brands/qa',
  },
  {
    label: 'Invoices',
    access: ['brand'],
    href: 'http://localhost:8080/back-office/brands/invoices',
  },
  {
    label: 'Products',
    access: ['salesRep', 'productManagement', 'blueprintManagement'],
    columns: [
      {
        options: [
          {
            label: 'Overview',
            href: 'http://localhost:8080/back-office/products',
            access: ['productManagement', 'salesRep'],
          },
          {
            label: 'Categories',
            href: 'http://localhost:8080/back-office/categories',
            access: ['productManagement'],
          },
          {
            label: 'Form Builder',
            href: 'http://localhost:8080/back-office/form-builder/list',
            access: ['productManagement'],
          },
          {
            label: 'Blueprint management',
            href: 'http://localhost:8080/back-office/blueprints',
            access: ['blueprintManagement'],
          },
          {
            label: 'Packages',
            href: 'http://localhost:8080/back-office/packages',
            access: ['blueprintManagement'],
          },
          {
            label: 'Verticals',
            href: 'http://localhost:8080/back-office/verticals',
            access: ['blueprintManagement'],
          }],
      }],
  },
  {
    label: 'Client Ops',
    access: ['qa'],
    columns: [
      {
        options: [
          {
            label: 'Quality Assurance',
            href: 'http://localhost:8080/back-office/client-ops/qa',
          },
          {
            label: 'Delivery Overview',
            href: 'http://localhost:8080/back-office/client-ops/delivery',
          },
          {
            label: 'All Offers',
            href: 'http://localhost:8080/back-office/client-ops/offers',
          },
          {
            label: 'Frame Agreements',
            href: 'http://localhost:8080/back-office/client-ops/frame-agreements',
          },
          {
            label: 'Lessons',
            href: 'http://localhost:8080/back-office/client-ops/lessons',
          }],
      }],
  },
  {
    label: 'Finance',
    access: ['finance'],
    columns: [
      {
        options: [
          {
            label: 'Orders',
            href: 'http://localhost:8080/back-office/finance/orders',
          },
          {
            label: 'Subscriptions',
            href: 'http://localhost:8080/back-office/finance/subscriptions',
          },
          {
            label: 'Brand Invoices',
            subOptions: [
              {
                label: 'Create Invoice',
                href: 'http://localhost:8080/back-office/finance/brand-invoices/new',
              },
              {
                label: 'View Invoices',
                href: 'http://localhost:8080/back-office/finance/brand-invoices',
              }],
          },
          {
            label: 'Venue Invoices',
            subOptions: [
              {
                label: 'Create Invoice',
                href: 'http://localhost:8080/back-office/finance/venue-invoices/new',
              },
              {
                label: 'View Invoices',
                href: 'http://localhost:8080/back-office/finance/venue-invoices',
              }],
          },
          {
            label: 'Commissions',
            subOptions: [
              {
                label: 'Create Payment',
                href: 'http://localhost:8080/back-office/finance/ambassador-payments/new',
              },
              {
                label: 'View Payments',
                href: 'http://localhost:8080/back-office/finance/ambassador-payment-logs',
              },
              {
                label: 'View Batches',
                href: 'http://localhost:8080/back-office/finance/ambassador-batch-payments',
              }],
          }],
      }],
  },
  {
    label: 'Import',
    access: ['salesManager'],
    columns: [
      {
        options: [
          {
            label: 'Venues',
            href: 'http://localhost:8080/back-office/import-venues',
          }],
      }],
  },
  {
    label: 'Venues',
    access: ['salesRep'],
    columns: [
      {
        options: [
          {
            label: 'Overview',
            href: 'http://localhost:8080/back-office/venues',
            access: ['salesRep'],
          }],
      }],
  }];



 const firebaseData = {
    products : {
      test : "Sko",
      test2 : "Tröja",
      test3 : ["Tshirt","Tröja", "Sko"],
      test4 : "Byxor",
      variants : {
        BlåSkor : {
          brand : "Nike",
          storlekar : [ 45, 46, 47 ]
        }
      }
    }
  }

  const testCase = [
    { products : {
      test : "Sko",
      test2 : "Tröja",
      test3 : ["Tshirt","Tröja", "Sko"],
      test4 : "Byxor",
      variants : {
        BlåSkor : {
          brand : "Nike",
          storlekar : [ 45, 46, 47 ]
        }
      }
    }},[{
      products : {
        test : "Sko",
        test2 : "Tröja",
        test3 : ["Tshirt","Tröja", "Sko",{test3:"test"}],
        test4 : "Byxor",
        variants : {
          BlåSkor : {
            brand : "Nike",
            storlekar : [ 45, 46, 47 ],
            test3:"test666"
          }
        }
      }
    }]
  ]
  

const ENDLESS_LOOP_LIMIT = 0;

const getFromObj = (obj, prop) => {
  const foundItems = [];
  let iterations = 0;
 
  const repeat = (obj2, prop) => {
	  Object.keys(obj2).map(key => {
		if (Array.isArray(obj2[key])) {
			enterArray(obj2[key], repeat); 
      } 
      if(Object.keys(obj2).includes(prop)){
        if(!foundItems.includes(obj2))
        foundItems.push(obj2)
      }
      else {
        Object.keys(obj2).map(key => {
         if(typeof obj2[key] === 'object'){
          enterArray(obj2[key], repeat); 
         }
        })
      }
	  })
  }

const enterArray = (obj, callBack) => {   
 if(Array.isArray(obj) && iterations < ENDLESS_LOOP_LIMIT) {
    for (let i = 0; i < obj.length; i++) {

      if (Object.keys(obj[i]).includes(prop)) {
        if (Array.isArray(obj[i][prop])) {
		
        }else{
			  return;
        }
        if(!foundItems.includes(obj[prop]))
          foundItems.push(obj[i][prop]);
      } else {
       callBack(obj[i], prop);
	  }
	  if( Object.keys(obj[i]).includes(prop) ) {

      if(!foundItems.includes(obj[i][prop]))
        foundItems.push(obj[i][prop]);
		    callBack(obj[i], prop);
      }
       iterations++;
    }
    }else if(!Array.isArray(obj) || !Array.isArray(obj.prop)){
      if(Object.keys(obj).includes(prop)){
      if(!foundItems.includes(obj[prop]))
          foundItems.push(obj[prop])
      }else{
      callBack(obj, prop)
      }
    }
  };

    enterArray(obj, repeat);
    console.log("FOUND ITEMS: " + foundItems.length)

    if(foundItems.length === 0)
    console.error("No Items found!")

  return foundItems;
};

 console.log('FOUND ITEMS: ' , getFromObj(obj, 'subOptions'));


