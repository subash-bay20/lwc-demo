public with sharing class MapController {
 @AuraEnabled(cacheable=true)
 public static List<Account> getAccount(){
    return [SELECT Id, Name, description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
 }
}
