<?php
// Copy to config.php (same folder) and fill in. config.php is git-ignored and blocked from web access.
return [
  // GHL → Settings → Private Integrations. Scopes: contacts.write, contacts.readonly, forms.write
  'ghl_token' => 'pit-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  // GHL → Settings → Business Profile → Location ID
  'location_id' => 'xxxxxxxxxxxxxxxxxxxx',
  // ID of the contact custom field "Job Photos" (type: File Upload). Leave '' to skip attaching files;
  // the photo links are still added to the contact note.
  'file_field_id' => '',
  'tags' => ['website-lead'],
  'cloudinary_cloud' => 'oakve7mf',
];
