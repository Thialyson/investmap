import { actionsList } from "./actionsList";

export function getFullNameAction(actionSelected: string) {
  if (actionSelected) {
    const actionFinded = actionsList.find(
      (item) => item.name === actionSelected
    );
    return `${actionFinded?.name} - ${actionFinded?.company}`;
  }
}
