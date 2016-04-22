# About

The Web App provided here includes hospital-specific charges for the more than 3,000 U.S. hospitals that receive Medicare Inpatient Prospective Payment System (IPPS) payments for the top 100 most frequently billed discharges, paid under Medicare based on a rate per discharge using the Medicare Severity Diagnosis Related Group (MS-DRG) for Fiscal Year (FY) 2011, 2012, and 2013. These DRGs represent more than 7 million discharges or 60 percent of total Medicare IPPS discharges.

Hospitals determine what they will charge for items and services provided to patients and these charges are the amount the hospital bills for an item or service. The Total Payment amount includes the MS-DRG amount, bill total per diem, beneficiary primary payer claim payment amount, beneficiary Part A coinsurance amount, beneficiary deductible amount, beneficiary blood deducible amount and DRG outlier amount.

For these DRGs, average charges, average total payments, and average Medicare payments are calculated at the individual hospital level. Users will be able to make comparisons between the amount charged by individual hospitals within local markets, and nationwide, for services that might be furnished in connection with a particular inpatient stay.

further information can be found :
https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Inpatient.html

# Node web application

```
$ git clone https://github.com/MartySmores/Ux.git
```
To push amendments to the code base please use a secure key and set the remote url of the repository as follows :

```
git remote set-url origin ssh://git@github.com/MartySmores/Ux.git
```

## Installation

Install all dependencies using npm.

```
$ npm install
```
## Development
You can define a port with `$ gulp --port 3333`. This can be modified in the gulp.js file.

```
$ npm start
```


## Production
Prior to deployment the content of the site need to be deployed to a production server. In this can all the production code appears in the dist folder.

```
$ gulp build --type production
```

## Testing
Added some basic scripts to check file and data integrity. A comprehensive series of testing routines can be ran to verify the integrity of the codebase.

```
$ npm test

```
