/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 */
 define(['N/record', 'N/search'],
  function(record, search) {

    function post(datain) {

      var listSearch = search.create({
        type: 'customrecord_mailchimp_list',
        filters: ['custrecord_list_id', search.Operator.IS, datain.id]
      });

      var id;

      listSearch.run().each(
        function(result) {
          id = result.id;
          return false;
        });

      var listRecord;

      if (id) {
        listRecord = record.load({
          id: id,
          type: 'customrecord_mailchimp_list'
        });
      } else {
        listRecord = record.create({
          type: 'customrecord_mailchimp_list'
        });
      };

      listRecord.setValue({
        fieldId: 'name',
        value: datain.id
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_id',
        value: datain.id
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_web_id',
        value: datain.web_id
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_permission_reminder',
        value: datain.permission_reminder
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_use_archive_bar',
        value: datain.use_archive_bar
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_company',
        value: datain.contact.company
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_address1',
        value: datain.contact.address1
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_address2',
        value: datain.contact.address2
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_city',
        value: datain.contact.city
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_state',
        value: datain.contact.state
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_zip',
        value: datain.contact.zip
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_country',
        value: datain.contact.country
      });

      listRecord.setValue({
        fieldId: 'custrecord_list_contact_phone',
        value: datain.contact.phone
      });

      var listId = listRecord.save();

      return {
        listInternalId: listId
      }

    }

    return {
      post: post
    };

  });
