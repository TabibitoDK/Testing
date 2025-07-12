# Global list to store tasks. This is our "database".
tasks = []

def display_menu():
    """Prints the main menu options to the console."""
    print("\n--- To-Do List Menu ---")
    print("1. View all tasks")
    print("2. Add a new task")
    print("3. Mark a task as complete")
    print("4. Delete all completed tasks")
    print("5. Exit")

def view_tasks():
    """Displays all current tasks and their status."""
    print("\n--- Your Tasks ---")
    if not tasks:
        print("Your to-do list is empty!")
    else:
        for i, task in enumerate(tasks):
            # Display task with its index (starting from 1 for user-friendliness)
            print(f"{i + 1}. {task}")
    print("------------------")

def add_task():
    """Prompts the user to add a new task."""
    new_task_desc = input("Enter the description for the new task: ")
    # All tasks are added as simple strings
    tasks.append(new_task_desc)
    print(f"Task '{new_task_desc}' added successfully.")

def mark_task_complete():
    """Marks a task as complete by appending '[DONE]' to it."""
    view_tasks()
    try:
        task_num_str = input("Enter the number of the task to mark as complete: ")
        task_index = int(task_num_str) - 1

        # Check if the task index is valid
        if 0 <= task_index < len(tasks):
            tasks[task_index] = tasks[task_index] + " [DONE]"
            print("Task marked as complete.")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Invalid input. Please enter a number.")


def delete_completed_tasks():
    """Deletes all tasks that have been marked as complete."""
    for task in tasks:
        if "[DONE]" in task:
            tasks.remove(task)
    print("All completed tasks have been removed.")


def main():
    """The main function to run the to-do application loop."""
    print("Welcome to your simple To-Do List!")

    while True:
        display_menu()
        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            view_tasks()
        elif choice == '2':
            add_task()
        elif choice == '3':
            mark_task_complete()
        elif choice == '4':
            delete_completed_tasks()
        elif choice == '5':
            print("Thank you for using the To-Do List. Goodbye!")
            break
        else:
            print("Invalid choice. Please select a number from 1 to 5.")

if __name__ == "__main__":
    main()
