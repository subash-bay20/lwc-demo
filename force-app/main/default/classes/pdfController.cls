public with sharing class pdfController {
        @AuraEnabled
        public static Attachment generatePDF(Id recordId, String htmlData){
                Pagereference pag = Page.renderAsPdf;
                pag.getParameters().put('pdfText' , htmlData);

                Contact con = new Contact(Id=recordId);
                Attachment objAttachment = new Attachment();
                objAttachment.Name='invoice.pdf';
                objAttachment.ParentId = con.Id;
                objAttachment.Body = pag.getContentaspdf();
                objAttachment.IsPrivate= false;
                insert objAttachment;
                return objAttachment ;
        }
}
