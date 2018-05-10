/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*here we will write test to confirm the feed has url and this url not empty
        we need to loop through allFeeds to check */

         it('URL defined&not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* here we will write test to confirm the feed has name and this name not empty
        *  we need lopp through allFedds to check
         */
         it('name defined & not empty',function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /*  Write a new test suite named "The menu" */

        /*here we will write test to check the menu hidden by default by check 
            body in the dom has class menu-heddin 
         */
         describe('The menu',function(){
            var body=$('body'); //use jQuery to select body
            it('hidden by default',function(){
                expect(body.hasClass('menu-hidden')).toBe(true);
            });
         

         /* here we will write test to check when user press on menu icon first (body will doesn't contain menu-hidden class)
                when we press second (body will contain menu-hidden class)
          */
          
            it('should be toggle between display & hide',function(){
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).not.toBe(true);
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
          });

    /*  Write a new test suite named "Initial Entries" */

         /* here we will write test to check when load function ready (complite it's work)
          * confirme feed has atleast a single entry ==> by check feed children greater than zero
          */
        describe('Initial Entries',function(){
            var entries;
            beforeEach(function(done){
                loadFeed(0,function(){ //will wait until loadFeed function done
                    entries=$('.feed .entry').html();
                    done();
                });
            });
            it('should be greater than 0',function(){
                expect(entries.length).toBeGreaterThan(0);
            });
        });

    /*  Write a new test suite named "New Feed Selection" */

       
         /* we will write test to check when a new feed is loades has new content changes
                 here we will compare between old content and new content in loadFeed
         */

describe('New Feed Selection',function(){
    var oldContent,
        newContent;
    beforeEach(function(done){
        loadFeed(0,function(){
            oldContent=$('.feed').html();

        loadFeed(1,function(){
            newContent=$('.feed').html();
            done();
        
        });
        });

    });
    // now will test if old&new not similar
    it('content change',function(){
        expect(oldContent).not.toBe(newContent);
    });
});

}());
