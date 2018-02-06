<?php

namespace Service;

	use DataModel\User;
	use DataModel\Band;
	use DataModel\GenericEvent;
	use DataModel\EmptyEvent;
	use DataModel\EventResult;
	use DataModel\RecordingEvent;
	use DataModel\RehearsalEvent;
	use DataModel\ShowEvent;
	use Service\BandService;

	#Service d'Event
	class EventService {

		### Constructeur Générique###
		public function __construct()
		{

		}

		#Méthode qui exécute l'event du User
		public function ExecuteCurrentTimeEvent($user)
		{
			### On récupère les Events du User et le CurrentTime (afin d'éxécuter le bon événement)
			### Récupération de l'événement courant (Test de nullité à prévoir)
			$eventToExecute = $user->Band->Schedule->GenericEvents[$user->CurrentTime];

			### Suivant le Type de l'événement, on effectue les traitements sur le User
			switch ($eventToExecute->Type) 
			{
				case "Recording":
					$this->ExecuteRecordingEvent($user, $eventToExecute);
					break;
				case "Rehearsal":
					$this->ExecuteRehearsalEvent($user, $eventToExecute);
					break;
				case "Show":
					$this->ExecuteShowEvent($user, $eventToExecute);
					break;
				default:
					# Si le type n'est pas connu, on n'effectue aucun traitement
					break;
			}

			### On incrémente le temps courant du User
			$user->CurrentTime += 1;

			### On retourne l'événement qu'on vient d'exécuter
			return $eventToExecute;
		}

		# Méthode privée qui exécute un event de Type Recording
		function ExecuteRecordingEvent($user, $eventToExecute)
		{
			### Construction du Result
			$eventToExecute->Result = new EventResult();

			### On récupère les données du Band avant de faire les traitements correspondant à l'event
			$bandService = new BandService();
			$eventToExecute->Result->BandBeforeEvent = $bandService->DuplicateBand($user->Band);

			### On applique les traitements de l'event
			### Création d'un nouveau Release
			$newRelease = new Release();
			$newRelease->Name = "New Release";
			array_push($user->Band->Releases, $newRelease);
		}

		# Méthode privée qui exécute un event de Type Rehearsal
		function ExecuteRehearsalEvent($user, $eventToExecute)
		{
			### Construction du Result
			$eventToExecute->Result = new EventResult();

			### On récupère les données du Band avant de faire les traitements correspondant à l'event
			$bandService = new BandService();
			$eventToExecute->Result->BandBeforeEvent = $bandService->DuplicateBand($user->Band);

			### On applique les traitements de l'event
			### Création d'un nouveau Track
			$newTrack = new Track();
			$newTrack->Name = "New Track";
			array_push($user->Band->Tracks, $newTrack);

			### Augmentation du Skill des player
			foreach ($user->Band->Players as $key => $value) {
				$value->Skill++;
			}

			### Augmentation de la cohésion
			$user->Band->Cohesion++;
		}

		# Méthode privée qui exécute un event de Type Show
		function ExecuteShowEvent($user, $eventToExecute)
		{
			### Construction du Result
			$eventToExecute->Result = new EventResult();

			### On récupère les données du Band avant de faire les traitements correspondant à l'event
			$bandService = new BandService();
			$eventToExecute->Result->BandBeforeEvent = $bandService->DuplicateBand($user->Band);

			### On applique les traitements de l'event
			### Augmentation du Skill des player
			foreach ($user->Band->Players as $key => $value) {
				$value->Skill++;
			}

			### Augmentation de la cohésion
			$user->Band->Cohesion++;
		}
	}