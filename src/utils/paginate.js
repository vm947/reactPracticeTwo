import _ from "lodash";
import Movies from "../components/movies";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex) //cuts off items before the start of index. 
    .take(pageSize) //Creates a slice of array with n elements taken from the beginning.
    .value();
}

/*Movies, 1, 4*
we take the array of movie objects.
we slice based on the start 

page number 1
0--startIndex
9- items from movies array with movies objects
9 left after slicing
5 left after we take away 4 (pageSize)
these 4 which take took way from are displayed on page 1

page number 2
4--start index
9- items from movies array with movies objects
5 -after we slice off the first 4 (startIndex = 4).--so we have movies 5-9
use take to take away the next 4-- array items 5,6,7,8 --and display it on page 2.

page number 3
8 --start index
9- items from movies array with movies objects
1- after we slice off 8 from the 9 in the movies arry
1- left after we take away 8 from the remaining 1. with take, if the taking number is bigger than the amount in the array, we take the entire array
we use this last 1 item take took away on display it on the page

*/

