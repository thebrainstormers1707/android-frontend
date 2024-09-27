import { 
  IonAvatar, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonCard, 
  IonToggle, 
  IonButton, 
  IonTabBar, 
  IonTabButton 
} from '@ionic/react';
import { locationOutline, settingsOutline, calendarOutline, homeOutline, notificationsOutline, alertCircleOutline, chatbubbleOutline, chevronForwardOutline } from 'ionicons/icons';
import './Home.css';
import pro from './img/pro.png' ;

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Header Section */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome,</IonTitle>
          <IonTitle> Username</IonTitle>

          <IonButtons slot="start">
            <IonAvatar>
            <img src={pro} alt="pro" />
            </IonAvatar>
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon icon={settingsOutline} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Main Content */}
      <IonContent fullscreen>
        <div className="page-content">
          {/* Location Card */}
          <IonCard className="location-card">
            <IonItem>
              <IonIcon icon={locationOutline} slot="start" />
              <IonLabel>You are At Your Workspace</IonLabel>
              <IonToggle checked color="success"></IonToggle>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Offsite Workplace</IonLabel>
              <IonButton fill="clear" color="primary">
                <IonIcon icon={chevronForwardOutline} />
              </IonButton>
            </IonItem>
          </IonCard>

          {/* Date Card */}
          <IonCard className="date-card">
            <IonItem lines="none">
              <IonIcon icon={calendarOutline} slot="start" />
              <IonLabel>Monday / 09-09-2024</IonLabel>
            </IonItem>
          </IonCard>

          {/* Check-in/Check-out Section */}
          <div className="check-in-out-container">
            <IonCard className="check-card">
              <IonItem lines="none">
                <IonLabel>Check In</IonLabel>
                <IonLabel slot="end">09:28:12</IonLabel>
              </IonItem>
            </IonCard>
            <IonCard className="check-card">
              <IonItem lines="none">
              <div className="line-break">
                <IonLabel>Check Out</IonLabel>
                <span></span>
             </div>
                <IonLabel slot="end">00:00:00</IonLabel>
              </IonItem>
            </IonCard>
          </div>

          {/* Working Hours Card */}
          <IonCard className="working-hours-card">
          <div className="line-break">
            <IonLabel className="working-hours-label">TODAY'S WORKING HOURS</IonLabel>
             <span></span>
             </div>
            <IonLabel className="working-hours-time">8 HOURS 30 MIN</IonLabel>
          </IonCard>
        </div>
      </IonContent>

      {/* Footer Navigation */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={homeOutline} />
        </IonTabButton>
        <IonTabButton tab="notifications">
          <IonIcon icon={notificationsOutline} />
        </IonTabButton>
        <IonTabButton tab="alerts">
          <IonIcon icon={alertCircleOutline} />
        </IonTabButton>
        <IonTabButton tab="chat">
          <IonIcon icon={chatbubbleOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Home;
