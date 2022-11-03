public with sharing class OppurtinitiesController {
 @AuraEnabled(cacheable=true)
 public static List<Opportunity> getOppurtinities(){
   return [SELECT StageName FROM Opportunity];
 }
}
