/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 */
define(['N/record', 'N/search'],
  function(record, search) {

    function post(datain) {

      var campaignSearch = search.create({
        type: 'customrecord_campaign',
        filters: ['custrecord_campaign_id', search.Operator.IS, datain.id]
      });

      var id;

      //run() runs the search. then for each result runs the function.
      //finds result id.
      campaignSearch.run().each(
        function(result) {
          id = result.id;
          return false;
        });

      var campaignRecord;

      //if id isnt null load this record using the campaign id, else create a new customecord_campaign object to then have the values set from datain.
      if (id) {
        campaignRecord = record.load({
          id: id,
          type: 'customrecord_campaign'
        });
      } else {
        campaignRecord = record.create({
          type: 'customrecord_campaign'
        });
      };

      campaignRecord.setValue({
        fieldId:'name',
        value: datain.id
      });

      campaignRecord.setValue({
        fieldId: 'custrecord_campaign_id',
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

      var campaignId = campaignRecord.save();

      var recipientsRecord = record.create({
        type: 'customrecord_recipients'
      });

      recipientsRecord.setValue({
        fieldId:'name',
        value: datain.recipients.list_id
      });

      recipientsRecord.setValue({
        fieldId: 'custrecord_recipients_list_id',
        value: datain.recipients.list_id
      });

      recipientsRecord.setValue({
        fieldId: 'custrecord_recipients_list_is_active',
        value: datain.recipients.list_is_active
      });

      recipientsRecord.setValue({
        fieldId: 'custrecord_recipients_list_name',
        value: datain.recipients.list_name
      });

      recipientsRecord.setValue({
        fieldId: 'custrecord_recipients_segment_text',
        value: datain.recipients.segment_text
      });

      recipientsRecord.setValue({
        fieldId: 'custrecord_recipients_recipient_count',
        value: datain.recipients.recipient_count
      });


      recipientsRecord.setValue({
        fieldId: 'custrecord_campaign',
        value: campaignId
      });

      var recipientsId = recipientsRecord.save();

      var settingsRecord = record.create({
        type: 'customrecord_mc_settings'
      });

      settingsRecord.setValue({
        fieldId: 'name',
        value: datain.settings.subject_line
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_subject_line',
        value: datain.settings.subject_line
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_title',
        value: datain.settings.title
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_from_name',
        value: datain.settings.from_name
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_reply_to',
        value: datain.settings.reply_to
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_use_conversation',
        value: datain.settings.use_conversation
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_to_name',
        value: datain.settings.to_name
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_folder_id',
        value: datain.settings.folder_id
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_authenticate',
        value: datain.settings.authenticate
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_auto_footer',
        value: datain.settings.auto_footer
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_inline_css',
        value: datain.settings.inline_css
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_auto_tweet',
        value: datain.settings.auto_tweet
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_fb_comments',
        value: datain.settings.fb_comments
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_timewarp',
        value: datain.settings.timewarp
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_template_id',
        value: datain.settings.template_id
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_settings_drag_and_drop',
        value: datain.settings.drag_and_drop
      });

      settingsRecord.setValue({
        fieldId: 'custrecord_mailchimp_settings_campaign',
        value: campaignId
      });

      var settingsId = settingsRecord.save();



      return {
        campaignInternalId: campaignId,
        recipientsInternalId: recipientsId
        /*settingsInternalId: settingsId*/
      }
    }

    return {
      post: post
    };
  });
