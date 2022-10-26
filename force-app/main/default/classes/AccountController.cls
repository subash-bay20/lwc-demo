public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
       public static List<Account> filterAccountByTypeType(String type) {
        return [SELECT Id, Name, Type, Industry from Account where Type=:type LIMIT 5];
    }


     @AuraEnabled(cacheable=true)
       public static List<Account> searchAccount(String searchKey) {
         String key = '%' +searchKey+ '%';
        return [SELECT Id, Name, Type, Industry from Account WHERE Name LIKE :key LIMIT 5];
    }
}
