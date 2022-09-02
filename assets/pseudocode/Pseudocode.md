# Pseudocode

## Objectives

- Layout the HTML Skeleton using Bootstrap
- Layout the foundation of logic to be used to format time and save user-generated events
- Optimize control flow of program

## Meta-Analysis of Approach

### Big Picture: Create a dynamic calendar that allows the user to save events and easily tell which time blocks are in the past, present, and future. 

#### Use Bootstrap to create hourly blocks with text input areas and save buttons in HTML. Repeat hourly blocks to span business day length.
```
START

  <div id="hour8" class="row time-block">
            <div class="col-md-1 hour">
                8 AM
            </div>
              <textarea class="col-md-10 description">
              </textarea>
              <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>
```

#### Display current day and time in header. 
```
Initialize variable currentDate and call Moment.js method to set variable equal to preferred format date

Use jQuery .html method to set <p> element content in jumbotron header equal to currentDate 
```

#### Set a state of readiness to make the following steps in program available to run.
```
Use jQuery to set state of readiness for user to manipulate HTML document
```

#### Add a save button event listener to save user-input to local storage.
```
Add event listener to save button so that it passes a function to retrieve user-generated events within respective hour block

Initialize "event" and "hour" variables to pass in as key name and value in following Storage.setItem() method call

Use Storage.setItem(hour,event) to properly save user-input into respective hour block to local storage
```

#### Create timeUpdate function to add background color indicators to time blocks. 

#### Retrieve items form local storage if any.

#### Run colorCode function to dynamically update background indicators for time blocks. 

