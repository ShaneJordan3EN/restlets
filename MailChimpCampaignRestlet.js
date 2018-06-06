/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 */
define(['N/record', 'N/error'], function(record, error) {

  // Create a NetSuite record from request params
  function post(datain) {

      var campaignRecord = record.create({
          type: 'customrecord_campaign'
      });

      campaignRecord.setValue({
        fieldId:'name',
        value: datain.id
      });

      campaignRecord.setValue({
        fieldId:'custrecord_campaign_id',
        value: datain.id
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_web_id',
        value: datain.web_id
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_type',
        value: datain.type
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_create_time',
        value: datain.create_time
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_archive_url',
        value: datain.archive_url
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_long_archive_url',
        value: datain.long_archive_url
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_status',
        value: datain.status
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_emails_sent',
        value: datain.emails_sent
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_send_time',
        value: datain.send_time
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_content_type',
        value: datain.content_type
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_needs_block_refresh',
        value: datain.needs_block_refresh
      });

      var recordId = campaignRecord.save();

      return {
        internalId:recordId
      }
  }

  return {
      post: post
  };
});
