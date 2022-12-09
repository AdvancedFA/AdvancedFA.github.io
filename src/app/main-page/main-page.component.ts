import { Match } from './../models/match';
import { Country } from './../models/country';
import { Component, OnInit } from '@angular/core';
import { PastMatchesContent } from '../models/pastMatchesContent';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  mainPageConten!: PastMatchesContent;
  selectedMatch: Match | undefined;
  constructor() { }

  ngOnInit(): void {
    this.getMainPageConten()
  }

  getMainPageConten() {
    this.mainPageConten = {
      countryList: [
        {
          country: 'Azerbaijan',
          leagueList: [
            {
              leagueName: 'Azerbaijan Premier League',
              matchList: [
                {
                  matchId: 1,
                  homeTeam: {
                    name: 'Garabagh',
                    logo: 'https://upload.wikimedia.org/wikipedia/tr/4/44/Karaba%C4%9F_FK.png',
                    coachName: 'Sanan',
                    coachSurname: 'Karimov',
                    playerList: [
                      {
                        id: 1,
                        name: 'Mustafa',
                        surname: 'Ahmadov',
                        playerNumber: 31,
                        position: 'ST'
                      },
                      {
                        id: 2,
                        name: 'Dilavar',
                        surname: 'Allahyarov',
                        playerNumber: 69,
                        position: 'RW'
                      },
                      {
                        id: 3,
                        name: 'Nasir',
                        surname: 'Mammadov ',
                        playerNumber: 3169,
                        position: 'LW'
                      }
                    ]
                  },
                  homeTeamFormation: '3- 2 - 3- 1',
                  awayTeam: {
                    name: 'Neftchi',
                    logo: 'https://upload.wikimedia.org/wikipedia/ru/2/2a/%D0%9D%D0%B5%D1%84%D1%82%D1%87%D0%B8_%D0%91%D0%B0%D0%BA%D1%83_logo.png',
                    coachName: 'Sanan',
                    coachSurname: 'Karimov',
                    playerList: [
                      {
                        id: 1,
                        name: 'Mustafa',
                        surname: 'Ahmadov',
                        playerNumber: 31,
                        position: 'ST'
                      },
                      {
                        id: 2,
                        name: 'Dilavar',
                        surname: 'Allahyarov',
                        playerNumber: 69,
                        position: 'RW'
                      },
                      {
                        id: 3,
                        name: 'Nasir',
                        surname: 'Mammadov ',
                        playerNumber: 3169,
                        position: 'LW'
                      }
                    ]
                  },
                  awayTeamFormation: '3- 2 - 3- 1',
                }
              ]
            }
          ]
        },
        {
          country: 'England',
          leagueList: [
            {
              leagueName: 'Premier League',
              matchList: []
            }
          ]
        },
        {
          country: 'Spain',
          leagueList: [
            {
              leagueName: 'Laliga',
              matchList: []
            }
          ]
        },
        {
          country: 'Germany',
          leagueList: [
            {
              leagueName: 'Bundesliga',
              matchList: []
            }
          ]
        }
      ]
    }
  }

  matchSelected(selectedMatchId: number) {
    for (const country of this.mainPageConten.countryList) {
      for (const league of country.leagueList) {
        if(league.matchList.length !== 0){
          this.selectedMatch = league.matchList.find(m => m.matchId === selectedMatchId);
        }
      }
    }
  }
}
