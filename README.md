# Floating Action Button Project

This project implements a Floating Action Button (FAB) with various functionalities like reporting issues, sharing feedback, giving suggestions, and contacting us.


## Project Description
The Floating Action Button (FAB) project provides a user-friendly way to interact with various forms. It allows users to report issues, share feedback, give suggestions, and contact the team.

Installation
To get started with the project, follow these steps:

Clone the repository:

```
git clone https://github.com/your-repo/fab-project.git
```

Navigate to the project directory:

```
cd fab-project
```

Install dependencies:

```
npm install
```

Usage
To run the project locally, use the following command:

```
npm start
```

This will start the development server and open the project in your default web browser.



### Components

FloatingButton
The FloatingButton component renders the FAB and handles its interactions. It displays a list of options based on the props passed to it.

Props:

enabledItems: A comma-separated string of enabled FAB items.
Example:

```
<FloatingButton enabledItems="Report an Issue,Share Feedback,Give Suggestion,Contact Us" />
```

ReportIssue
The ReportIssue component renders a form that allows users to report issues they are facing.

FeedbackForm
The FeedbackForm component renders a form that allows users to share their feedback.

SuggestionForm
The SuggestionForm component renders a form that allows users to give suggestions.

ContactUs
The ContactUs component renders a form that allows users to contact the team.


Additional Features

Thanks Message
When users submit their form, a pop-up appears above the FAB button showing a thank-you message. This message disappears after 5000ms.

Rate Us Card
After completing a section, a rate-us card appears, prompting the user to rate the service. This card is centered on all devices with a background overlay.

