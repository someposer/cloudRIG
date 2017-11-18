# cloudRIG

[Powered by Parsec](https://parsec.tv), but there is an old [ZeroTier + Steam Home Streaming branch](https://github.com/williamparry/cloudRIG/tree/zerotier-steamstreaming)

## Features

* Play using Parsec for around $0.10c / hour
* Schedule shut down for the end of the current billing hour (AWS charges by the hour)
* Auto-saves your rig when you stop or are booted off

## GUI version (in progress)

<img width="600" alt="Configuration Screen" src="https://user-images.githubusercontent.com/348091/32979619-fbe44170-cc58-11e7-9428-747dd3a0f9fb.png">

<img width="600" alt="Initialization Screen" src="https://user-images.githubusercontent.com/348091/32982361-59593b60-cc83-11e7-822a-f23320bec151.png)">

## CLI version

<img width="600" alt="cloudRIG boot screen" src="https://user-images.githubusercontent.com/348091/31599523-1df1ff3e-b253-11e7-9afc-22b37d4cec04.png">
<img width="600" alt="Parsec Screen" src="https://user-images.githubusercontent.com/348091/31599767-06218612-b254-11e7-951e-5d9b4f9f106d.png">

## Cost

You set the maximum price you're willing to pay and cloudRIG will find the cheapest Availability Zone for your region, which is cheaper.

You will also have a separate EBS volume for storing games, which is around $10/month ([check for your region](https://calculator.s3.amazonaws.com/index.html))

**Don't forget to turn it off when you're done gaming!**

## Setup

### Parsec

* Make a Parsec account
* Download the Parsec client
* [Get the self-hosting key](https://parsec.tv/add-computer/own)

![click on 'click here to see extra steps' and then in the element that appears, find the server_key](https://user-images.githubusercontent.com/348091/32673294-ef117400-c64e-11e7-949f-a34344b1368e.jpg)

### AWS

* You can use your existing credentials if you want, or make an IAM user with Administrator privileges. This is so that cloudRIG can make the requisite AWS infrastructure.
* Use the [shared credentials file](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
    * Make a note of it, you will need it for the first run

cloudRIG will offer to set up all the AWS infrastructure needed for cloudrig. You will be asked to confirm each step.

### Software

* NodeJS

### Running CLI

    cd cli
    npm install
    node index

### Running GUI

This is a work in progress

    cd gui
    npm install
    npm run build
    ./node_modules/.bin/electron .

## Notice

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
