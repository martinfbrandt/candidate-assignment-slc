I wasn't able to get Docker properly set up. I wasn't sure if there was an .env file that I missed, however i'd make the following updates to the selection of candidates if I could get the database running:

* query database with pagination, sending a page number or pagination token stored between requests which would instruct the DB to send me the next page of results. This would also mean the UI needs either a page function or we implement a dynamic request on vertical scroll of the results for infinite pagination.
* I would filter the results by the search term, so that we don't have to perform this operation on the client side


Other UI improvements i'd like to make:
* scrolling as discussed above
* fix bug clearing filter name
* cleanup and genericization of the search components so they could be used in other cases
* actually create and use Typescript types ☹️
