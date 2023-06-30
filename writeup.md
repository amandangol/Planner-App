 The custom-made widget which I think is an appropriate widget to have in the planner app is <strong>TaskManagerWidget combined with QuoteWidget.</strong>

 Here's a write-up that includes information about the Task Manager Widget and its relationship to the Quote Widget:

The Planner App, consisting of the Quote Widget and the Task Manager Widget, offers users a comprehensive solution for organizing their day, staying inspired, and boosting productivity. With the ability to fetch and display a random quote of the day, as well as manage tasks and schedule events, users can streamline their planning process and stay motivated throughout their day.

## Why this custom-widget?

The Planner App combines the functionalities of the Quote Widget and the Task Manager Widget to provide users with a holistic planning experience. By integrating these two components, users can leverage the power of inspirational quotes to fuel their motivation while effectively managing their tasks and scheduling their day.

- Inspiration and Productivity:
  The Quote Widget, with its daily random quotes, serves as a source of inspiration and motivation. Users can start their planning process by receiving a thought-provoking quote that stimulates creativity and helps them maintain a positive mindset throughout the day. This integration of inspiration and productivity enhances the overall planning experience.

- Task Management:
  The Task Manager Widget allows users to efficiently organize their day by creating and managing tasks. Users can add tasks, mark them as completed, edit task details, and remove tasks when they are no longer relevant. This functionality ensures that users can stay on top of their to-do list, prioritize tasks, and track their progress effectively.

- Seamless Integration:
  The Planner App seamlessly integrates the Quote Widget and the Task Manager Widget into a single interface. Users can switch between the widgets effortlessly, allowing them to access both the inspiration of the Quote Widget and the task management capabilities of the Task Manager Widget within the same app. This streamlined experience enhances convenience and productivity.

## How to use the widget?

The App provides users with a cohesive platform to access both the Quote Widget and the Task Manager Widget. Here's how users can interact with the app:

- Upon opening the app, the Quote Widget will display a random quote of the day, inspiring users to start their planning process on a positive note.

- Users can click the "Shuffle" button in the Quote Widget to fetch a new random quote whenever they desire additional inspiration.

- The Task Manager Widget allows users to add tasks by entering the task details in the input field and clicking the "Add Task" button. This enables users to create a list of tasks for the day.

- Users can mark a task as completed by checking the corresponding checkbox beside the task. This visually indicates task progress and helps users track their achievements.

- For tasks that require editing, users can click the "Edit" button in the Task Manager Widget to modify the task details. This ensures flexibility and adaptability in task management.

- To remove a task from the list, users can click the "Remove" button beside the task. This allows users to declutter their task list and maintain focus on relevant and active tasks.

- The Planner App also provides a "Reset Tasks" button for users who wish to clear their task list and start afresh. This feature enables users to reset their planning process whenever necessary.

By incorporating the Planner App consisting this widget into their daily routine, users can seamlessly integrate inspiration and motivation from the Quote Widget with effective task management from the Task Manager Widget. This holistic approach optimizes planning, boosts productivity, and enhances overall satisfaction.

## How Does the Code Functionality Work?

- The Quote Widget and the Task Manager Widget are implemented as separate functional components in React, providing modularity and code organization.

- The Quote Widget utilizes the useState and useEffect hooks for managing state and fetching the random quote of the day.

- The Task Manager Widget employs the useState hook for managing the task list and related states.

- The fetchQuoteOfTheDay function in the Quote Widget fetches a random quote of the day from the quotable.io API. The quote content and author are stored in state variables.

- The handleRandomize function is triggered when the "Randomize" button is clicked in the Quote Widget. It calls the fetchQuoteOfTheDay function to fetch a new random quote and updates the state variables accordingly.

- In the Task Manager Widget, the addTask function is responsible for adding tasks to the task list. It appends the new task to the existing list of tasks stored in state.

- The markTaskComplete function is invoked when a task's checkbox is checked in the Task Manager Widget. It updates the completed status of the corresponding task in the task list.

- The editTask function allows users to modify task details. It finds the task in the task list using its unique identifier and updates the task details accordingly.

- The removeTask function removes a task from the task list based on its unique identifier.

- The resetTasks function clears the entire task list, providing users with a clean slate for task management.

By leveraging the Quote Widget and the Task Manager Widget within the Planner App, users can efficiently plan their day, stay inspired, and manage their tasks effectively. This comprehensive solution empowers users to optimize their productivity and achieve their goals.
