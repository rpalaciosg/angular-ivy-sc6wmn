import { Component } from '@angular/core';

interface Activity{
  title: string;
  description: string;
  milestonesToShow:[Milestone]
}

interface Milestone{
  title: string;
  badge: string;
  icon: string;
}

interface GraphActivity {
  id?: string;
  key_id?: string;
  connectors?: Array<string>;
  t?: string; // this is the graph activity title
  dificulty?: string;
  long_description?: string;
  game_important?: string;
  materials?: string;
  milestones?: Array<Milestone>;
  is_simplified_activity?: boolean;
}

interface GraphMilestone {
  title: string;
  icon: string;
  optimal_scenario: string;
  in_progress_scenario: string;
  long_description: string;
  feedback_question: string;
  milestone_picture: string;
  id: string;
  key_id: string;
  month: string;
}

interface User{
   email: string;
  //  name: string;
   children:[Child];
}

interface Child{
  /*..TODO..*/
  scoreBoard:[Score]
}

interface Score{
  activityId: string;
  points: number;
  month: number;
  createdAt: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{

  myUser: User;
  myChild: Child;
  activities: Array<Activity>;
  currentChildId: string;
  childId: string;

  constructor(
    // TODO create and call ActivitiesProvider Class
    // private activitiesProvider: ActivitiesProvider,
  ) {
     this.childId = 'myChildId-12345'
  }

  loadRecentActivitiesForChild(childId) {
    /*.. TODO .. */
  }

  /**
   * Another util function description example... 
   *
   * @param childId
   * @param children
   * @returns child
   */
  findChild(childId:string, children: any[]) {
    return children.find((child) => child.id === childId) ?? children[0]
  }
}