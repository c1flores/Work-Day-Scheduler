# Pseudocode

## Objectives

- Layout the foundation of logic behind the coding assessment
- Establish naming conventions for variables to be used
- Optimize control flow of algorithm

## Meta-Analysis of Approach

### Big Picture: Create a dynamic calendar that allows the user to save events and easily tell which time blocks are in the past, present, and future. 

#### Use Bootstrap to create hourly blocks with text input areas and save buttons. Repeat hourly blocks to span business day length.
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

#### Display current day and time. 

#### Set a state of readiness to make the following steps in program available to run.

#### Add a save button event listener to save user input to local storage.

#### Create colorCode function to add background indicators to time blocks. 

#### Retrieve items form local storage if any.

#### Run colorCode function to dynamically update background indicators for time blocks. 

