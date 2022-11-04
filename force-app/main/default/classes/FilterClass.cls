public with sharing class FilterClass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
    return [SELECT Id, Name, Title, Email FROM Contact];
    }
}
