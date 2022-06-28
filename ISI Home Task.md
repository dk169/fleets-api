# ISI Home Task - Server

Welcome aboard major! We have some issues with fetching fleet records for our app and we need your help!
Your mission is to develop a server API app to serve fleet records to the clients.

Use [this URL](https://run.mocky.io/v3/367bedbd-5bf6-4d55-a659-2eb6e4f733a2) for the source data (make sure to load it via http request).
Each record in the json contains a vessel('ship') and it's latest position('position').

- Add a router with these two routes

# Get ships by country name

      1. Input: country name
      2. Output: list of ships that originate from this country

# Get ships by distance

      3. Input:
      {
      "point": {
            "lat": 32,
            "lon": 32
      },
      "radius_km": 5
      }
      4. Output: a collection of vessels within the radius_km of the point, ordered by distance (the vessel closest to the point should be first)
      \*you can use geospatial library to help with geographic computation

Guidlines:

- make sure you return the proper status codes
- Write a clean and readable code.
- Add a `README.md` file with Instructions.
- Add comments.
- dockerize the application and add instructions (how to do docker build & docker run).

Good luck!
