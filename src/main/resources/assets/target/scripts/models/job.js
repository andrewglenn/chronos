define(["backbone","underscore","models/base_job"],function(e,t,n){var r;return r=n.extend({isNew:function(){return!0},isValid:function(){return!1},getWhitelist:function(){return[].concat(n.getWhitelist())},hasSchedule:function(){return!0}}),r});