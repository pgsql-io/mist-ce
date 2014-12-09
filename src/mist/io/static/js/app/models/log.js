define('app/models/log', ['ember'],
    //
    //  Log Model
    //
    //  @returns Class
    //
    function () {

        'use strict';

        return Ember.Object.extend({


            //
            //
            //  Properties
            //
            //


            _id: null,
            email: null,
            time: null,
            action: null,
            backendId: null,
            machineId: null,
            mode: null,

        });
    }
);
